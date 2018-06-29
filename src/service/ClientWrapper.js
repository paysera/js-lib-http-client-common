import { AuthenticationError } from '../error';

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
        try {
            const response = await this.client({
                method: request.method,
                url: request.path,
                data: request.body,
                params: request.parameters,
            });

            return response.data;
        } catch (error) {
            if (error instanceof AuthenticationError) {
                if (!repeat) {
                    throw error.getResponse();
                }

                return this.performRequest(request, false);
            }

            throw error;
        }
    }
}
