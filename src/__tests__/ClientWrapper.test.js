import nock from 'nock';
import createRequest from '../service/createRequest';
import createClient from '../service/createClient';
import { config, createClientWrapper } from './__utils__/factory';
import axiosNockMock from './__utils__/axios-nock-mock';

axiosNockMock();

beforeEach(() => {
    nock.disableNetConnect();
});

describe('ClientWrapper', () => {
    test('makes request and return response', async () => {
        const clientWrapper = createClientWrapper();

        const requestMock = nock(config.HOST)
            .get('/list')
            .reply(200, 'data');

        const response = await clientWrapper.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(response).toEqual('data');
        expect(requestMock.isDone()).toEqual(true);
    });

    test('do not repeat request if error is not AuthorizationError', async () => {
        const clientWrapper = createClientWrapper();

        const requestMock = nock(config.HOST)
            .get('/list')
            .replyWithError('error message');
        const secondRequestMock = nock(config.HOST)
            .get('/list')
            .reply(200, 'data');

        try {
            await clientWrapper.performRequest(createRequest(
                'get',
                '/list',
            ));
        } catch (error) {
            expect(error.message).toEqual('error message');
            expect(requestMock.isDone()).toEqual(true);
            expect(secondRequestMock.isDone()).toEqual(false);
        }
    });

    test('BaseUrl parameters are replaced with given values', async () => {
        const baseUrl = 'https://{shard_id}.my-domain.com/rest/{version}/some-endpoint/{locale}';
        const client = createClient({
            baseURL: baseUrl,
            options: {
                urlParameters: {
                    shard_id: 'abc',
                    version: 'v1',
                    locale: 'en',
                },
            },
        });
        const requestMock = nock('https://abc.my-domain.com')
            .get('/rest/v1/some-endpoint/en/list')
            .reply(204);

        await client.performRequest(createRequest('get', '/list'));
        expect(requestMock.isDone()).toBe(true);
    });

    test('Exception is thrown if some parameters to BaseUrl is not given', async () => {
        const baseUrl = 'https://{shard_id}.my-domain.com/rest/{version}/some-endpoint/{locale}';
        expect(() => {
            createClient({
                baseURL: baseUrl,
                options: {
                    urlParameters: {
                        shard_id: 'abc',
                        // version: 'v1', - missing parameter
                        locale: 'en',
                    },
                },
            });
        }).toThrow();
    });

    test('Promises have cancellationTokenSource', async () => {
        const clientWrapper = createClientWrapper();
        nock(config.HOST)
            .get('/list')
            .reply(204);

        const promiseFromBaseRequest = clientWrapper.performBaseRequest(createRequest('get', '/list'));
        expect(promiseFromBaseRequest).toHaveProperty('cancellationTokenSource');

        const promiseFromRequest = clientWrapper.performRequest(createRequest('get', '/list'));
        expect(promiseFromRequest).toHaveProperty('cancellationTokenSource');
    });

    test('CancellationTokenSource cancels pending promise', () => {
        const clientWrapper = createClientWrapper();
        const requestMock = nock(config.HOST)
            .get('/list')
            .reply(204);
        const error = {
            message: 'Manually cancelled',
        };

        const promise = clientWrapper.performRequest(createRequest('get', '/list'));
        promise.cancellationTokenSource.cancel(error.message);

        expect(requestMock.isDone()).toBe(false);
        return expect(promise).rejects.toMatchObject(error);
    });
});
