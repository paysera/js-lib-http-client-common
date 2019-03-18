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
    performRequest(request, repeat = true) {
        const requestPromise = this.performBaseRequest(request, repeat);
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
    performBaseRequest(request, repeat = true) {
        const source = CancelToken.source();
        const requestPromise = this.sendRequest(
            {
                method: request.method,
                url: request.path,
                data: request.body,
                params: request.parameters,
                cancelToken: source.token,
            },
            repeat,
        );

        requestPromise.cancellationTokenSource = source;

        return requestPromise;
    }

    /**
     * @param {object} config
     *
     * @returns {Promise.<*>}
     */
    sendRequest(config) {
        return this.client({
            ...config,

            resendRequest: (resendConfig = {}) => this.sendRequest({ ...config, ...resendConfig }),
        });
    }
}
