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
        const response = await this.sendRequest(
            {
                method: request.method,
                url: request.path,
                data: request.body,
                params: request.parameters,
            },
            repeat,
        );

        return response.data;
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
