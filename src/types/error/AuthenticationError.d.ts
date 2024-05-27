export default class AuthenticationError extends Error {
    constructor(response: any, ...params: any[]);

    getResponse(): any;
}
