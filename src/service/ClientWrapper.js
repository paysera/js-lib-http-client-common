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
    async performRequest(request, repeat = true) {
        const response = await this.performBaseRequest(request, repeat);

        return response.data;
    }

    /**
     * @param {Request} request
     * @param {boolean} repeat
     *
     * @returns {Promise.<*>}
     */
    performBaseRequest(request, repeat = true) {
        return this.sendRequest(
            {
                method: request.method,
                url: request.path,
                data: request.body,
                params: request.parameters,
            },
            repeat,
        );
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
