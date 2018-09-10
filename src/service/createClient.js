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

    if (middleware !== null) {
        useMiddlewareList(instance, middleware);
    }

    return new ClientWrapper(instance);
};
