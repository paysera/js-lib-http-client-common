import nock from 'nock';
import axios from 'axios';

import axiosNocMock from '../__utils__/axios-nock-mock';
import {
    useRequestMiddleware,
    useResponseMiddleware,
    useMiddleware,
    useMiddlewareList,
} from '../../service/util/useMiddlewareList';

axiosNocMock();

beforeEach(() => {
    nock.disableNetConnect();
    nock.cleanAll();
});

describe('useRequestMiddleware', () => {
    test('modifies request config', async () => {
        const RESPONSE = [1, 2];

        nock('https://demo.dev')
            .get('/list')
            .reply(200, RESPONSE);

        const axiosInstance = axios.create({ baseURL: 'https://demo.dev' });
        const middleware = {
            onRequest: jest.fn().mockImplementation(config => ({ ...config, customConfig: 'custom-config' })),
        };

        useRequestMiddleware(axiosInstance, middleware);

        const response = await axiosInstance.get('/list');

        expect(response.data).toEqual(RESPONSE);
        expect(response.config).toHaveProperty('customConfig', 'custom-config');
        expect(middleware.onRequest).toHaveBeenCalledTimes(1);
    });
});

describe('useResponseMiddleware', () => {
    test('modifies response data', async () => {
        nock('https://demo.dev')
            .get('/list')
            .reply(200, [1, 2]);

        const axiosInstance = axios.create({ baseURL: 'https://demo.dev' });
        const middleware = {
            onResponse: jest.fn().mockImplementation(response => ({ ...response, data: response.data.join(',') })),
        };

        useResponseMiddleware(axiosInstance, middleware);

        const response = await axiosInstance.get('/list');

        expect(response.data).toEqual('1,2');
        expect(middleware.onResponse).toHaveBeenCalledTimes(1);
    });

    test('modifies error response', async () => {
        nock('https://demo.dev')
            .get('/list')
            .reply(400, 'something awful happened');

        const axiosInstance = axios.create({ baseURL: 'https://demo.dev' });
        const middleware = {
            onResponseError: jest.fn().mockImplementation(error => Promise.reject({
                ...error,
                response: {
                    ...error.response,
                    data: 'modified',
                },
            })),
        };

        useResponseMiddleware(axiosInstance, middleware);

        try {
            await axiosInstance.get('/list');
        } catch (error) {
            expect(middleware.onResponseError).toHaveBeenCalledTimes(1);
            expect(error.response.data).toEqual('modified');
        }
    });
});

describe('useMiddleware', () => {
    test('adds all interceptors', async () => {
        const axiosInstance = axios.create({ baseURL: 'https://demo.dev' });
        const middleware = {
            onRequest: jest.fn(),
            onResponse: jest.fn(),
            onResponseError: jest.fn(),
        };

        useMiddleware(axiosInstance, middleware);

        let totalRequestInterceptors = 0;
        axiosInstance.interceptors.request.forEach((interceptor) => {
            expect(interceptor.fulfilled).not.toBe(undefined);
            expect(interceptor.rejected).toBe(undefined);
            totalRequestInterceptors++;
        });
        expect(totalRequestInterceptors).toBe(1);

        let totalResponseInterceptors = 0;
        axiosInstance.interceptors.response.forEach((interceptor) => {
            expect(interceptor.fulfilled).not.toBe(undefined);
            expect(interceptor.rejected).not.toBe(undefined);
            totalResponseInterceptors++;
        });
        expect(totalResponseInterceptors).toBe(1);
    });
});

describe('useMiddlewareList', () => {
    test('adds list of middleware', () => {
        const axiosInstance = axios.create({ baseURL: 'https://demo.dev' });
        const middlewareList = [
            {
                onRequest: jest.fn(),
                onResponse: jest.fn(),
                onResponseError: jest.fn(),
            },
            {
                onRequest: jest.fn(),
                onResponse: jest.fn(),
                onResponseError: jest.fn(),
            },
        ];

        useMiddlewareList(axiosInstance, middlewareList);

        let totalRequestInterceptors = 0;
        axiosInstance.interceptors.request.forEach((interceptor) => {
            expect(interceptor.fulfilled).not.toBe(undefined);
            expect(interceptor.rejected).toBe(undefined);
            totalRequestInterceptors++;
        });
        expect(totalRequestInterceptors).toBe(2);

        let totalResponseInterceptors = 0;
        axiosInstance.interceptors.response.forEach((interceptor) => {
            expect(interceptor.fulfilled).not.toBe(undefined);
            expect(interceptor.rejected).not.toBe(undefined);
            totalResponseInterceptors++;
        });
        expect(totalResponseInterceptors).toBe(2);
    });
});
