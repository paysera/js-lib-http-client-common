import Scope from '../../entity/Scope';

declare class Token {
    constructor(scope: Scope, token: string);

    getScope(): Scope;
    getTokenValue(): string;
}

export default Token;
