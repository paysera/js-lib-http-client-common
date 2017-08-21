class TokenProvider {

    /**
     * @param {Scope} scope
     * @param {callback|null} provider
     */
    constructor(scope, provider = null) {
        this.scope = scope;
        this.provider = provider;
    }

    /**
     * @returns {Promise.<null>}
     */
    getToken() {
        return Promise.resolve(this.provider !== null ? this.provider(this.scope) : null);
    }
}

export default TokenProvider;
