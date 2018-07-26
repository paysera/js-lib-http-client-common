import axios from 'axios';

import ClientWrapper from './ClientWrapper';

const ERROR_MIDDLEWARE_STATUS = {
    error: 'error',
    response: 'response',
};

export default ({
    baseURL = null,
    middleware = null,
}) => {
    const instance = axios.create({
        baseURL,
    });

    if (middleware !== null) {
        instance.interceptors.request.use(config => middleware.reduce(
            async (currentConfig, currentMiddleware) => (
                typeof currentMiddleware.onRequest === 'function'
                    ? currentMiddleware.onRequest(await currentConfig)
                    : currentConfig
            ),
            config,
        ));

        instance.interceptors.response.use(
            response => middleware.reduce(
                async (currentResponse, currentMiddleware) => (
                    typeof currentMiddleware.onResponse === 'function'
                        ? currentMiddleware.onResponse(await currentResponse)
                        : currentResponse
                ),
                response,
            ),
            async (error) => {
                const result = await middleware.reduce(
                    async (currentError, currentMiddleware) => {
                        try {
                            const data = typeof currentMiddleware.onResponseError === 'function'
                                ? await currentMiddleware.onResponseError(await currentError.data)
                                : currentError.data;

                            return {
                                type: ERROR_MIDDLEWARE_STATUS.response,
                                data,
                            };
                        } catch (errorResponse) {
                            return {
                                type: ERROR_MIDDLEWARE_STATUS.error,
                                data: errorResponse,
                            };
                        }
                    },
                    {
                        type: ERROR_MIDDLEWARE_STATUS.error,
                        data: error,
                    },
                );

                if (result.type === ERROR_MIDDLEWARE_STATUS.error) {
                    throw await result.data;
                }

                return result.data;
            },
        );
    }

    return new ClientWrapper(instance);
};
