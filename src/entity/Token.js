class Token {

    /**
     * @param {Scope} scope
     * @param {string} token
     */
    constructor(scope, token) {
        this.scope = scope;
        this.token = token;
    }

    /**
     * @returns {Scope}
     */
    getScope() {
        return this.scope;
    }

    /**
     * @returns {string}
     */
    getTokenValue() {
        return this.token;
    }
}

export default Token;
