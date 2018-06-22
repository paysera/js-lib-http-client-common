import Scope from '../../../../entity/Scope';
import Token from '../../../../entity/Token';
import {
    storageKey,
    createSessionStorageTokenProvider,
    config,
} from '../../../__utils__/factory';

beforeEach(() => {
    sessionStorage.clear();
});

describe('SessionStorageTokenProvider', () => {
    test('create token', async () => {
        const tokenProvider = createSessionStorageTokenProvider();

        const token = await tokenProvider.createToken(new Scope(config.SCOPE_VALUE));

        const expectedScope = new Scope(config.SCOPE_VALUE);
        const expectedToken = new Token(expectedScope, config.CREATED_TOKEN);

        expect(token).toEqual(expectedToken);
    });

    test('save created token to storage', async () => {
        const tokenProvider = createSessionStorageTokenProvider();

        await tokenProvider.createToken(new Scope(config.SCOPE_VALUE));

        const expectedScope = new Scope(config.SCOPE_VALUE);
        const expectedToken = new Token(expectedScope, config.CREATED_TOKEN);

        expect(sessionStorage.length).toBe(1);
        expect(sessionStorage.__STORE__[storageKey()]).toBe(JSON.stringify(expectedToken));
    });

    test('don not request new token if given scope token already exists in storage', async () => {
        const tokenProvider = createSessionStorageTokenProvider();

        const expectedScope = new Scope(config.SCOPE_VALUE);
        const expectedToken = new Token(expectedScope, 'old-token');

        sessionStorage.__STORE__[storageKey()] = JSON.stringify(expectedToken);

        await tokenProvider.createToken(expectedScope);

        expect(sessionStorage.length).toBe(1);
        expect(sessionStorage.__STORE__[storageKey()]).toBe(JSON.stringify(expectedToken));
    });

    test('return same token on multiple calls of createToken', async () => {
        const createTokenActionMock = jest.fn().mockImplementation(scope => ({ scope, accessToken: config.CREATED_TOKEN }));
        const tokenProvider = createSessionStorageTokenProvider(createTokenActionMock);

        const token = await tokenProvider.createToken(new Scope(config.SCOPE_VALUE));
        await tokenProvider.createToken(new Scope(config.SCOPE_VALUE));
        await tokenProvider.createToken(new Scope(config.SCOPE_VALUE));

        const expectedScope = new Scope(config.SCOPE_VALUE);
        const expectedToken = new Token(expectedScope, config.CREATED_TOKEN);

        expect(token).toEqual(expectedToken);
        expect(createTokenActionMock).toHaveBeenCalledTimes(1);

        expect(sessionStorage.length).toBe(1);
        expect(sessionStorage.__STORE__[storageKey()]).toBe(JSON.stringify(expectedToken));
    });

    test('refresh token', async () => {
        const tokenProvider = createSessionStorageTokenProvider();

        const token = await tokenProvider.refreshToken(new Scope(config.SCOPE_VALUE));

        const expectedScope = new Scope(config.SCOPE_VALUE);
        const expectedToken = new Token(expectedScope, config.REFRESHED_TOKEN);

        expect(token).toEqual(expectedToken);
    });

    test('save refreshed token to the storage', async () => {
        const tokenProvider = createSessionStorageTokenProvider();

        await tokenProvider.refreshToken(new Scope(config.SCOPE_VALUE));

        const expectedScope = new Scope(config.SCOPE_VALUE);
        const expectedToken = new Token(expectedScope, config.REFRESHED_TOKEN);

        expect(sessionStorage.length).toBe(1);
        expect(sessionStorage.__STORE__[storageKey()]).toBe(JSON.stringify(expectedToken));
    });
});
