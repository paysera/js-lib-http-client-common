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
        return yield* this.getItems();
    }

    /**
     * @returns {Array.|null}
     */
    getItems() {
        return typeof this.data[this.dataKey] !== 'undefined'
            ? this.data[this.dataKey].map(item => this.createItem(item))
            : []
        ;
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
        if (this.getMetadata() !== null) {
            return typeof this.getMetadata().total !== 'undefined' ? this.getMetadata().total : null;
        }
        return null;
    }

    /**
     * @returns {int|null}
     */
    getOffset() {
        if (this.getMetadata() !== null) {
            return typeof this.getMetadata().offset !== 'undefined' ? this.getMetadata().offset : null;
        }
        return null;
    }

    /**
     * @returns {int|null}
     */
    getLimit() {
        if (this.getMetadata() !== null) {
            return typeof this.getMetadata().limit !== 'undefined' ? this.getMetadata().limit : null;
        }
        return null;
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
