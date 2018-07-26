import Scope from '../../entity/Scope';
import { AuthenticationError } from '../../error';

const AUTH_HTTP_CODES = [401, 403];

export default class JWTAuthenticationMiddleware {
    /**
     * @param {Scope} scope
     * @param tokenProvider
     */
    constructor(scope, tokenProvider) {
        this.scope = scope;
        this.tokenProvider = tokenProvider;
    }

    async onRequest(config) {
        const token = await this.tokenProvider.createToken(this.scope);

        const jwtAuthenticationConfig = typeof config.jwtAuthenticationConfig === 'undefined'
            ? { retryCount: 0 }
            : { ...config.jwtAuthenticationConfig };

        return {
            ...config,
            headers: {
                ...config.headers || {},
                Authorization: `Bearer ${token.getTokenValue()}`,
            },
            jwtAuthenticationConfig,
        };
    }

    async onResponseError(error) {
        if (
            typeof error === 'object'
            && typeof error.response === 'object'
            && AUTH_HTTP_CODES.indexOf(error.response.status) !== -1
        ) {
            const resendConfig = { ...error.config };
            if (resendConfig.jwtAuthenticationConfig.retryCount < 1) {
                resendConfig.jwtAuthenticationConfig.retryCount += 1;

                await this.tokenProvider.refreshToken(this.scope);

                return error.config.resendRequest(resendConfig);
            }
        }

        throw error;
    }
}
