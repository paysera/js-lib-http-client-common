class Scope {
    /**
     * @param {string} value
     */
    constructor(value) {
        this.value = value;
    }

    /**
     * @returns {string}
     */
    getValue() {
        return this.value;
    }
}

export default Scope;
