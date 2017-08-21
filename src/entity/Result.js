import Entity from './Entity';

class Result extends Entity {

    /**
     * @param {object} data
     * @param {string} dataKey
     */
    constructor(data, dataKey = 'items') {
        super(data);
        this.dataKey = dataKey;
        this.metadataKey = '_metadata';
    }

    * [Symbol.iterator]() {
        return yield* this.getItems().map(item => this.createItem(item));
    }

    /**
     * @returns {Array.|null}
     */
    getItems() {
        return typeof this.data[this.dataKey] !== 'undefined' ? this.data[this.dataKey] : [];
    }

    /**
     * @returns {object|null}
     */
    getMetadata() {
        return typeof this.data[this.metadataKey] !== 'undefined' ? this.data[this.metadataKey] : null;
    }

    /**
     * @returns {int|null}
     */
    getTotal() {
        return typeof this.metadata.total !== 'undefined' ? this.metadata.total : null;
    }

    /**
     * @returns {int|null}
     */
    getOffset() {
        return typeof this.metadata.offset !== 'undefined' ? this.metadata.offset : null;
    }

    /**
     * @returns {int|null}
     */
    getLimit() {
        return typeof this.metadata.limit !== 'undefined' ? this.metadata.limit : null;
    }

    /**
     * @param {object} data
     * @returns {Entity}
     */
    createItem(data) {
        return new Entity(data);
    }
}

export default Result;
