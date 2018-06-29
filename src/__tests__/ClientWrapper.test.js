import nock from 'nock';
import createRequest from '../service/createRequest';
import { config, createClientWrapper } from './__utils__/factory';
import axiosNockMock from './__utils__/axios-nock-mock';
import { AuthenticationError } from '../error';

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

    test('repeat request on AuthorizationError', async () => {
        const clientWrapper = createClientWrapper();

        const requestMock = nock(config.HOST)
            .get('/list')
            .replyWithError(new AuthenticationError({}));
        const secondRequestMock = nock(config.HOST)
            .get('/list')
            .reply(200, 'data');

        const response = await clientWrapper.performRequest(createRequest(
            'get',
            '/list',
        ));

        expect(response).toEqual('data');
        expect(requestMock.isDone()).toEqual(true);
        expect(secondRequestMock.isDone()).toEqual(true);
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
});
