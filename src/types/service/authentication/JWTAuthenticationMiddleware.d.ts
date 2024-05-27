import Scope from '../../entity/Scope';

export default class JWTAuthenticationMiddleware {
    constructor(scope: Scope, tokenProvider: any);

    onRequest(config: any): Promise<any>;

    onResponseError(error: any): Promise<any>;
}
