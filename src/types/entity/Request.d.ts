declare class Request {
    constructor(method: string, path: string, parameters: (object | null), body: (object | null));
}

export default Request;
