import { TokenError } from '../error';
import SessionStorage from '../../storage/SessionStorage';
import Token from '../../../entity/Token';
import Scope from '../../../entity/Scope';

export default class SessionStorageTokenProvider {
    constructor(createTokenAction, refreshTokenAction, identifier, namespace = null) {
        this.createTokenAction = createTokenAction;
        this.refreshTokenAction = refreshTokenAction;
        this.identifier = identifier;
        this.storage = new SessionStorage(namespace);
    }

    /**
     * @param {Scope} scope
     *
     * @returns {Promise<Token>}
     */
    async createToken(scope) {
        const token = this.getScopeToken();
        if (token !== null) {
            return token;
        }

        try {
            const { scope: newScope, accessToken } = await this.createTokenAction(scope);
            const newToken = new Token(newScope, accessToken);

            this.saveToken(newToken);

            return newToken;
        } catch (error) {
            throw new TokenError('Unable to create token');
        }
    }

    /**
     * @param {Scope} scope
     *
     * @returns {Promise<Token>}
     */
    async refreshToken(scope) {
        try {
            const { scope: newScope, accessToken } = await this.refreshTokenAction(scope);
            const token = new Token(newScope, accessToken);

            this.saveToken(token);

            return token;
        } catch (error) {
            throw new TokenError('Unable to refresh token');
        }
    }

    /**
     * @returns {Token|null}
     */
    getScopeToken() {
        const tokenData = this.storage.get(this.getTokenStorageKey());
        if (typeof tokenData === 'undefined') {
            return null;
        }

        return new Token(
            new Scope(tokenData.scope.value),
            tokenData.token,
        );
    }

    /**
     * @param {Token} token
     *
     * @returns {SessionStorageTokenProvider}
     */
    saveToken(token) {
        this.storage.set(this.getTokenStorageKey(), token);

        return this;
    }

    /**
     * @returns {string}
     */
    getTokenStorageKey() {
        return `token_${this.identifier}`;
    }
}
