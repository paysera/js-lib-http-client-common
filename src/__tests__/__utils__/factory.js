import axios from 'axios';
import SessionStorageTokenProvider from '../../service/authentication/tokenProvider/SessionStorageTokenProvider';
import Scope from '../../entity/Scope';
import createClientMethod from '../../service/createClient';
import JWTAuthenticationMiddleware from '../../service/authentication/JWTAuthenticationMiddleware';
import ClientWrapper from '../../service/ClientWrapper';

const HOST = 'https://demo.com';
const STORAGE_NAMESPACE = 'namespace';
const STORAGE_IDENTIFIER = 'identifier';
const SCOPE_VALUE = 'scope:a';
const CREATED_TOKEN = 'created-token';
const REFRESHED_TOKEN = 'refreshed-token';

export const createSessionStorageTokenProvider = (
    createTokenAction = scope => ({ scope, accessToken: CREATED_TOKEN }),
    refreshTokenAction = scope => ({ scope, accessToken: REFRESHED_TOKEN }),
    identifier = STORAGE_IDENTIFIER,
    namespace = STORAGE_NAMESPACE,
) => new SessionStorageTokenProvider(createTokenAction, refreshTokenAction, identifier, namespace);

export const createJWTAuthenticationMiddleware = (
    scope = new Scope(SCOPE_VALUE),
    tokenProvider = createSessionStorageTokenProvider(),
) => new JWTAuthenticationMiddleware(
    scope,
    tokenProvider,
);

export const storageKey = () => `__storejs_${STORAGE_NAMESPACE}_token_${STORAGE_IDENTIFIER}`;

export const createClient = (
    baseURL = HOST,
    middleware = [createJWTAuthenticationMiddleware()],
) => createClientMethod({ baseURL, middleware });

export const createClientWrapper = (client = axios.create({ baseURL: HOST })) => new ClientWrapper(client);

export const config = {
    HOST,
    SCOPE_VALUE,
    STORAGE_NAMESPACE,
    STORAGE_IDENTIFIER,
    CREATED_TOKEN,
    REFRESHED_TOKEN,
};
