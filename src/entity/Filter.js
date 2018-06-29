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
        this.set('order_by', orderBy);
    }

    getOrderBy() {
        return this.get('order_by');
    }

    setOrderDirection(orderDirection) {
        this.set('order_direction', orderDirection);
    }

    getOrderDirection() {
        return this.get('order_direction');
    }
}

export default Filter;
