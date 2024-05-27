export default class SessionStorage {
    store: StoreJsAPI;

    constructor(namespace?: string);

    get(key: string): any;

    set(key: string, value?: any): void;
}
