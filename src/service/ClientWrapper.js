class ClientWrapper {

    /**
     * @param {Axios} client
     * @param {object} options
     */
    constructor(client, options) {
        this.client = client;
        this.options = options;
        this.token = null;
    }

    /**
     * @param {TokenProvider} provider
     */
    setTokenProvider(provider = null) {
        this.tokenProvider = provider;
    }

    /**
     * @returns {TokenProvider|null}
     */
    getTokenProvider() {
        return this.tokenProvider;
    }

    /**
     * @param {Token} token
     */
    setToken(token) {
        this.token = token;
    }

    /**
     * @returns {Promise.<Token|null>}
     */
    getToken() {
        if (this.token === null) {
            const provider = this.getTokenProvider();

            if (provider === null) {
                return Promise.resolve(null);
            }

            return provider.getToken().then((token) => {
                this.token = token;
                return this.token;
            });
        }

        return Promise.resolve(this.token);
    }

    /**
     * @param {Request} request
     * @param {boolean} repeat
     *
     * @returns {Promise.<*>}
     */
    performRequest(request, repeat = true) {
        const headers = {};

        return this.getToken().then((token) => {
            if (token !== null) {
                headers.Authorization = token.getTokenValue();
            }

            return this.client({
                method: request.method,
                url: request.path,
                data: request.body,
                params: request.parameters,
                headers,
            }).then((result) => {
                return result.data;
            }).catch((error) => {
                if (
                    error.response
                    && error.response.status === 403
                    && typeof this.options.refreshTokenProvider !== 'undefined'
                    && token !== null
                    && repeat
                ) {
                    return this.options.refreshTokenProvider(token.getScope())
                        .then((refreshedToken) => {
                            this.setToken(refreshedToken);
                            return this.performRequest(request, false);
                        });
                }

                throw error;
            });
        });
    }
}

export default ClientWrapper;
