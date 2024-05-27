import Scope from '../../entity/Scope';
import {SessionStorageTokenProvider} from "./tokenProvider";

export default class JWTAuthenticationMiddleware {
    constructor(scope: Scope, tokenProvider: any);
    scope: Scope;
    tokenProvider: SessionStorageTokenProvider;
    onRequest(config: any): Promise<any>;
    onResponseError(error: any): Promise<any>;
}
