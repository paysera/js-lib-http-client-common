import nock from 'nock';
import requestFactory from '../service/requestFactory';
import { createClient, config } from './__utils__/factory';
import axiosNockMock from './__utils__/axios-nock-mock';

axiosNockMock();

beforeEach(() => {
    nock.disableNetConnect();
    sessionStorage.clear();
});

describe('clientFactory', () => {
    test('makes request with jwt authorization middleware', async () => {
        const client = createClient();

        const requestMock = nock(config.HOST, { reqheaders: { Authorization: `Bearer ${config.CREATED_TOKEN}` } })
            .get('/list')
            .reply(200, 'data');

        const response = await client.performRequest(requestFactory(
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

        const response = await client.performRequest(requestFactory(
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

        const response = await client.performRequest(requestFactory(
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
            await client.performRequest(requestFactory(
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
});
