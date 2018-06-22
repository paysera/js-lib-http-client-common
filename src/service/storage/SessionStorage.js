import store from 'store';
import sessionStorage from 'store/storages/sessionStorage';

export default class SessionStorage {
    constructor(namespace = null) {
        this.store = store.createStore(sessionStorage, [], namespace);
    }

    get(key) {
        return this.store.get(key);
    }

    set(key, value) {
        return this.store.set(key, value);
    }
}
