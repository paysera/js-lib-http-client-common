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
        instance.interceptors.request.use((config) => {
            config.instance = config;

            return middleware.reduce(
                async (currentConfig, currentMiddleware) => await currentMiddleware.onRequest(currentConfig),
                config,
            );
        });

        instance.interceptors.response.use(
            response => response,
            async (error) => {
                throw await middleware.reduce(
                    async (currentError, currentMiddleware) => {
                        try {
                            return await currentMiddleware.onResponseError(currentError);
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
