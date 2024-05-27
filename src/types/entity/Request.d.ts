declare class Request {
    constructor(
        method: string,
        path: string,
        body: (object | null),
        parameters: (object | null),
    );
}

export default Request;
