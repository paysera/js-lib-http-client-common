import Scope from '../../../entity/Scope';
import Token from '../../../entity/Token';

export default class SessionStorageTokenProvider {
    constructor(createTokenAction: any, refreshTokenAction: any, identifier: any, namespace?: null);

    createToken(scope: Scope): Promise<Token>;

    refreshToken(scope: Scope): Promise<Token>;

    getScopeToken(): Token | null;

    saveToken(token: Token): SessionStorageTokenProvider;

    getTokenStorageKey(): string;
}
