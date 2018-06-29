import axios from 'axios';

import ClientWrapper from './ClientWrapper';

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
            response => response,
            async (error) => {
                throw await middleware.reduce(
                    async (currentError, currentMiddleware) => {
                        try {
                            return typeof currentMiddleware.onResponseError === 'function'
                                ? await currentMiddleware.onResponseError(await currentError)
                                : currentError;
                        } catch (errorResponse) {
                            return errorResponse;
                        }
                    },
                    error,
                );
            },
        );
    }

    return new ClientWrapper(instance);
};
