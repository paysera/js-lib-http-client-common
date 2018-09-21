import nock from 'nock';
import createRequest from '../service/createRequest';
import { createClient, config } from './__utils__/factory';
import axiosNockMock from './__utils__/axios-nock-mock';

axiosNockMock();

beforeEach(() => {
    nock.disableNetConnect();
    sessionStorage.clear();
    nock.cleanAll();
});

describe('clientFactory', () => {
    test('test X-Requested-With header', async () => {
        const client = createClient();

        const requestMock = nock(config.HOST, { reqheaders: { 'X-Requested-With': 'XMLHttpRequest' } })
            .get('/list')
            .reply(200, 'data');

        await client.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(requestMock.isDone()).toBe(true);
    });

    test('makes request with jwt authorization middleware', async () => {
        const client = createClient();

        const requestMock = nock(config.HOST, { reqheaders: { Authorization: `Bearer ${config.CREATED_TOKEN}` } })
            .get('/list')
            .reply(200, 'data');

        const response = await client.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(response).toEqual('data');
        expect(requestMock.isDone()).toBe(true);
    });

    test('makes request without any authorization middleware', async () => {
        const client = createClient(undefined, []);

        const requestMock = nock(config.HOST, { badheaders: ['Authorization'] })
            .get('/list')
            .reply(200, 'data');

        const response = await client.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(response).toEqual('data');
        expect(requestMock.isDone()).toBe(true);
    });

    test('refresh authorization header when response status is 401', async () => {
        const client = createClient();

        const unauthorizedRequestMock = nock(config.HOST, { reqheaders: { Authorization: `Bearer ${config.CREATED_TOKEN}` } })
            .get('/list')
            .reply(401);

        const successRequestMock = nock(config.HOST, { reqheaders: { Authorization: `Bearer ${config.REFRESHED_TOKEN}` } })
            .get('/list')
            .reply(200, 'data');

        const response = await client.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(response).toEqual('data');
        expect(unauthorizedRequestMock.isDone()).toBe(true);
        expect(successRequestMock.isDone()).toBe(true);
    });

    test('fails request after two unauthorized requests', async () => {
        const client = createClient();

        const firstRequestMock = nock(config.HOST, { reqheaders: { Authorization: `Bearer ${config.CREATED_TOKEN}` } })
            .get('/list')
            .reply(401);

        const secondRequestMock = nock(config.HOST, { reqheaders: { Authorization: `Bearer ${config.REFRESHED_TOKEN}` } })
            .get('/list')
            .reply(401);

        const thirdRequestMock = nock(config.HOST)
            .get('/list')
            .reply(200);

        try {
            await client.performRequest(createRequest(
                'get',
                '/list',
            ));
        } catch (error) {
            expect(error.response).toMatchObject({
                status: 401,
                statusText: null,
                data: '',
            });

            expect(firstRequestMock.isDone()).toEqual(true);
            expect(secondRequestMock.isDone()).toEqual(true);
            expect(thirdRequestMock.isDone()).toEqual(false);
        }
    });

    test('custom async onRequest middleware', async () => {
        const firstMiddleware = {
            onRequest: jest.fn().mockImplementation(requestConfig => new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ...requestConfig,
                        headers: {
                            ...requestConfig.headers || {},
                            'x-middleware': 'first',
                        },
                    });
                }, 200);
            })),
        };

        const secondMiddleware = {
            onRequest: jest.fn().mockImplementation(requestConfig => new Promise((resolve) => {
                setTimeout(() => {
                    const headers = requestConfig.headers || {};
                    if (typeof headers['x-middleware'] !== 'undefined') {
                        headers['x-middleware'] += ' second';
                    }

                    resolve({
                        ...requestConfig,
                        headers,
                    });
                }, 20);
            })),
        };

        const thirdMiddleware = {
            onRequest: jest.fn().mockImplementation(requestConfig => new Promise((resolve) => {
                setTimeout(() => {
                    const headers = requestConfig.headers || {};
                    if (typeof headers['x-middleware'] !== 'undefined') {
                        headers['x-middleware'] += ' third';
                    }

                    resolve({
                        ...requestConfig,
                        headers,
                    });
                }, 0);
            })),
        };

        const client = createClient(
            undefined,
            [firstMiddleware, secondMiddleware, thirdMiddleware],
        );

        const requestMock = nock(config.HOST, {
            reqheaders: { 'x-middleware': 'first second third' },
        })
            .get('/list')
            .reply(200, 'data');

        const response = await client.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(response).toEqual('data');
        expect(requestMock.isDone()).toBe(true);
    });

    test('custom async onResponseError middleware', async () => {
        const firstMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ...error,
                        response: {
                            ...error.response,
                            status: parseInt(error.response.status, 10) + 1,
                        },
                    });
                }, 200);
            })),
        };

        const secondMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ...error,
                        response: {
                            ...error.response,
                            status: parseInt(error.response.status, 10) + 1,
                        },
                    });
                }, 100);
            })),
        };

        const client = createClient(
            undefined,
            [firstMiddleware, secondMiddleware],
        );

        const requestMock = nock(config.HOST)
            .get('/list')
            .reply(404, 'data');

        try {
            await client.performRequest(createRequest(
                'get',
                '/list',
            ));
        } catch (error) {
            expect(error.response.status).toBe(406);
        }

        expect(requestMock.isDone()).toBe(true);
    });

    test('first called middleware returns fulfilled promise, so second middleware will not be called', async () => {
        const firstMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve) => {
                setTimeout(async () => {
                    resolve({ data: 'firstMiddleware' });
                }, 200);
            })),
        };

        const secondMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => error),
        };

        const client = createClient(
            undefined,
            [firstMiddleware, secondMiddleware],
        );

        const requestMock = nock(config.HOST)
            .get('/list')
            .reply(400, 'data');

        const response = await client.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(firstMiddleware.onResponseError).toHaveBeenCalledTimes(1);
        expect(secondMiddleware.onResponseError).toHaveBeenCalledTimes(0);
        expect(response).toEqual('firstMiddleware');
        expect(requestMock.isDone()).toBe(true);
    });

    test('both middleware returns rejected promise', async () => {
        const firstMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject({
                        ...error,
                        response: {
                            ...error.response,
                            data: `${error.response.data} first`,
                        },
                    });
                }, 200);
            })),
        };

        const secondMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject({
                        ...error,
                        response: {
                            ...error.response,
                            data: `${error.response.data} second`,
                        },
                    });
                }, 200);
            })),
        };

        const client = createClient(
            undefined,
            [firstMiddleware, secondMiddleware],
        );

        const requestMock = nock(config.HOST)
            .get('/list')
            .reply(400, 'data');


        try {
            await client.performRequest(createRequest(
                'get',
                '/list',
            ));
        } catch (error) {
            expect(error.response.data).toEqual('data first second');

            expect(firstMiddleware.onResponseError).toHaveBeenCalledTimes(1);
            expect(secondMiddleware.onResponseError).toHaveBeenCalledTimes(1);
            expect(requestMock.isDone()).toBe(true);
        }
    });

    test('onResponse middleware execution order by add sequence', async () => {
        const firstMiddleware = {
            onResponse: jest.fn().mockImplementation(response => new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ...response,
                        data: `${response.data} first`,
                    });
                }, 200);
            })),
        };

        const secondMiddleware = {
            onResponse: jest.fn().mockImplementation(response => new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ...response,
                        data: `${response.data} second`,
                    });
                }, 20);
            })),
        };

        const thirdMiddleware = {
            onResponse: jest.fn().mockImplementation(response => new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ...response,
                        data: `${response.data} third`,
                    });
                }, 20);
            })),
        };

        const client = createClient(
            undefined,
            [firstMiddleware, secondMiddleware, thirdMiddleware],
        );

        const requestMock = nock(config.HOST)
            .get('/list')
            .reply(200, 'data');

        const response = await client.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(response).toEqual('data first second third');

        expect(requestMock.isDone()).toBe(true);
    });

    test('onResponseError middleware execution order by add sequence', async () => {
        const firstMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject({
                        ...error,
                        response: {
                            ...error.response,
                            data: `${error.response.data} first`,
                        },
                    });
                }, 200);
            })),
        };

        const secondMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject({
                        ...error,
                        response: {
                            ...error.response,
                            data: `${error.response.data} second`,
                        },
                    });
                }, 20);
            })),
        };

        const thirdMiddleware = {
            onResponseError: jest.fn().mockImplementation(error => new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject({
                        ...error,
                        response: {
                            ...error.response,
                            data: `${error.response.data} third`,
                        },
                    });
                }, 100);
            })),
        };

        const client = createClient(
            undefined,
            [firstMiddleware, secondMiddleware, thirdMiddleware],
        );

        const requestMock = nock(config.HOST)
            .get('/list')
            .reply(400, 'data');

        try {
            await client.performRequest(createRequest(
                'get',
                '/list',
            ));
        } catch (error) {
            expect(error.response.status).toEqual(400);
            expect(error.response.data).toEqual('data first second third');

            expect(requestMock.isDone()).toBe(true);
        }
    });

    test('onRequest middleware execution order by add sequence', async () => {
        const firstMiddleware = {
            onRequest: jest.fn().mockImplementation(requestConfig => new Promise((resolve, reject) => {
                setTimeout(() => {
                    const headers = requestConfig.headers || {};
                    if (typeof headers['x-middleware'] === 'undefined') {
                        headers['x-middleware'] = '';
                    }
                    headers['x-middleware'] += ' first';

                    resolve({
                        ...requestConfig,
                        headers,
                    });
                }, 200);
            })),
        };

        const secondMiddleware = {
            onRequest: jest.fn().mockImplementation(requestConfig => new Promise((resolve, reject) => {
                setTimeout(() => {
                    const headers = requestConfig.headers || {};
                    if (typeof headers['x-middleware'] === 'undefined') {
                        headers['x-middleware'] = '';
                    }
                    headers['x-middleware'] += ' second';

                    resolve({
                        ...requestConfig,
                        headers,
                    });
                }, 20);
            })),
        };

        const thirdMiddleware = {
            onRequest: jest.fn().mockImplementation(requestConfig => new Promise((resolve, reject) => {
                setTimeout(() => {
                    const headers = requestConfig.headers || {};
                    if (typeof headers['x-middleware'] === 'undefined') {
                        headers['x-middleware'] = '';
                    }
                    headers['x-middleware'] += ' third';

                    resolve({
                        ...requestConfig,
                        headers,
                    });
                }, 100);
            })),
        };

        const client = createClient(
            undefined,
            [firstMiddleware, secondMiddleware, thirdMiddleware],
        );

        const requestMock = nock(config.HOST, {
            reqheaders: { 'x-middleware': ' first second third' },
        })
            .get('/list')
            .reply(400, 'data');

        try {
            await client.performRequest(createRequest(
                'get',
                '/list',
            ));
        } catch (error) {
            expect(error.response.status).toEqual(400);
            expect(error.response.data).toEqual('data');

            expect(requestMock.isDone()).toBe(true);
        }
    });
});
