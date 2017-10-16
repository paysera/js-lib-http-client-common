import Q from 'q';

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
        return Q.when(typeof this.provider === 'function' ? this.provider(this.scope) : null);
    }
}

export default TokenProvider;
