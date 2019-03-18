import axios from 'axios';

import ClientWrapper from './ClientWrapper';
import parseBaseUrlParameters from './parseBaseUrlParameters';
import { useMiddlewareList } from './util/useMiddlewareList';

export default ({
    baseURL = null,
    middleware = null,
    options = {},
}) => {
    const instance = axios.create({
        baseURL: parseBaseUrlParameters(baseURL, options),
    });

    instance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    instance.defaults.maxRedirects = 0;

    if (middleware !== null) {
        useMiddlewareList(instance, middleware);
    }

    return new ClientWrapper(instance);
};
