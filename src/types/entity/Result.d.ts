import Entity from './Entity';

declare class Result extends Entity {
    constructor(data: object, dataKey?: string);

    getItems(): any | null;

    getMetadata(): object | null;

    getTotal(): number | null;

    getOffset(): number | null;

    getLimit(): number | null;

    createItem(data: object): Entity;

    [Symbol.iterator](): Generator<any, any, any>;
}

export default Result;
