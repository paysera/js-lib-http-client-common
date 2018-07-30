import { createSessionStorageTokenProvider, createJWTAuthenticationMiddleware, config } from '../../__utils__/factory';

const createRequestConfig = () => ({
    headers: {},
});

describe('JWTAuthenticationMiddleware', () => {
    test('adds authorization header', async () => {
        const middleware = createJWTAuthenticationMiddleware();

        const requestConfig = { ...createRequestConfig() };
        const expected = {
            ...requestConfig,
            jwtAuthenticationConfig: {
                retryCount: 0,
            },
            headers: {
                ...requestConfig.headers || {},
                Authorization: `Bearer ${config.CREATED_TOKEN}`,
            },
        };

        expect(await middleware.onRequest(requestConfig)).toEqual(expected);
    });

    test('throws AuthenticationError and refresh token', async () => {
        const refreshTokenActionMock = jest.fn()
            .mockImplementation(scope => ({ scope, accessToken: 'refreshed-token' }));
        const tokenProvider = createSessionStorageTokenProvider(
            undefined,
            refreshTokenActionMock,
        );
        const middleware = createJWTAuthenticationMiddleware(undefined, tokenProvider);

        try {
            await middleware.onResponseError({
                config: {
                    jwtAuthenticationConfig: {
                        retryCount: 0,
                    },
                    resendRequest: () => {
                        throw new Error('Resend error');
                    },
                },
                response: {
                    status: 401,
                },
            });
        } catch (error) {
            expect(refreshTokenActionMock).toHaveBeenCalledTimes(1);
            expect(error).toBeInstanceOf(Error);
        }
    });

    test('throws failed response when status is not 401 or 403', async () => {
        const refreshTokenActionMock = jest.fn()
            .mockImplementation(scope => ({ scope, accessToken: 'refreshed-token' }));
        const tokenProvider = createSessionStorageTokenProvider(
            undefined,
            refreshTokenActionMock,
        );
        const middleware = createJWTAuthenticationMiddleware(undefined, tokenProvider);

        try {
            await middleware.onResponseError({
                response: {
                    status: 500,
                },
            });
        } catch (error) {
            expect(error).toEqual({ response: { status: 500 } });
        }
    });
});
