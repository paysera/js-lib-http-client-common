import {AxiosStatic} from "axios";

export default class ClientWrapper {

    constructor(client: AxiosStatic);
    client: AxiosStatic;

    performRequest(request: Request): Promise<any>;
    performBaseRequest(request: Request): Promise<any>;
    sendRequest(config: object): Promise<any>;
}
