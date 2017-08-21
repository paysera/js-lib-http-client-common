import Entity from './Entity';

class Filter extends Entity {

    setLimit(limit) {
        this.set('limit', limit);
    }

    getLimit() {
        return this.get('limit');
    }

    setOffset(offset) {
        this.set('offset', offset);
    }

    getOffset() {
        return this.get('offset');
    }

    setOrderBy(orderBy) {
        this.set('orderBy', orderBy);
    }

    getOrderBy() {
        return this.get('orderBy');
    }

    setOrderDirection(orderDirection) {
        this.set('orderDirection', orderDirection);
    }

    getOrderDirection() {
        return this.get('orderDirection');
    }
}

export default Filter;
