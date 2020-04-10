import { CancelToken } from 'axios';

export default class ClientWrapper {
    /**
     * @param {axios} client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * @param {Request} request
     * @param {boolean} repeat
     *
     * @returns {Promise.<*>}
     */
    performRequest(request) {
        const requestPromise = this.performBaseRequest(request);
        const dataPromise = requestPromise.then(response => response.data);

        dataPromise.cancellationTokenSource = requestPromise.cancellationTokenSource;

        return dataPromise;
    }

    /**
     * @param {Request} request
     * @param {boolean} repeat
     *
     * @returns {Promise.<*>}
     */
    performBaseRequest(request) {
        return this.sendRequest({
            method: request.method,
            url: request.path,
            data: request.body,
            params: request.parameters,
        });
    }

    /**
     * @param {object} config
     *
     * @returns {Promise.<*>}
     */
    sendRequest(config) {
        const source = CancelToken.source();

        const response = this.client({
            ...config,
            cancelToken: source.token,
            resendRequest: (resendConfig = {}) => this.sendRequest({ ...config, ...resendConfig }),
        });

        response.cancellationTokenSource = source;

        return response;
    }
}
