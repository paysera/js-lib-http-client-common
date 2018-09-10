/**
 * @param {axios} instance
 * @param {Object} middleware
 */
export const useRequestMiddleware = (instance, middleware) => {
    if (typeof middleware.onRequest === 'function') {
        instance.interceptors.request.use(async config => middleware.onRequest(await config));
    }
};

/**
 * @param {axios} instance
 * @param {Object} middleware
 */
export const useResponseMiddleware = (instance, middleware) => {
    const existsOnResponse = typeof middleware.onResponse === 'function';
    const existsOnResponseError = typeof middleware.onResponseError === 'function';

    if (existsOnResponse || existsOnResponseError) {
        instance.interceptors.response.use(
            existsOnResponse
                ? async response => middleware.onResponse(await response)
                : undefined,
            existsOnResponseError
                ? async error => middleware.onResponseError(await error)
                : undefined,
        );
    }
};

/**
 * @param {axios} instance
 * @param {Object} middleware
 */
export const useMiddleware = (instance, middleware) => {
    useRequestMiddleware(instance, middleware);
    useResponseMiddleware(instance, middleware);
};

/**
 * @param {axios} instance
 * @param {Object[]} middlewareList
 */
export const useMiddlewareList = (instance, middlewareList) => {
    middlewareList.forEach(middleware => useResponseMiddleware(instance, middleware));
    middlewareList.reverse().forEach(middleware => useRequestMiddleware(instance, middleware));
};
