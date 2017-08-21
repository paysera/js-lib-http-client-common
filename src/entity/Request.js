class Request {

    /**
     * @param {string} method
     * @param {string} path
     * @param {(object|null)} parameters
     * @param {(object|null)} body
     */
    constructor(method, path, parameters, body) {
        this.method = method;
        this.path = path;
        this.parameters = parameters;
        this.body = body;
    }
}

export default Request;
