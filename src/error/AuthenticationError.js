export default class AuthenticationError extends Error {
    constructor(response, ...params) {
        super(...params);

        this.response = response;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, AuthenticationError);
        }
    }

    getResponse() {
        return this.response;
    }
}
