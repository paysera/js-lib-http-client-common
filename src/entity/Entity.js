class Entity {
    /**
     * @param {object} data
     */
    constructor(data = {}) {
        this.data = data;
    }

    /**
     * @param {string} key
     * @param {string} value
     */
    set(key, value) {
        this.data[key] = value;
    }

    /**
     * @param {string} key
     * @returns {string|null}
     */
    get(key) {
        return typeof this.data[key] !== 'undefined' ? this.data[key] : null;
    }

    /**
     * @returns {*}
     */
    getData() {
        return this.data;
    }
}

export default Entity;
