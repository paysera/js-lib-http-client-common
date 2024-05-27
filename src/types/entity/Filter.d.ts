import Entity from './Entity';

declare class Filter extends Entity {
    setLimit(limit: number): void;
    getLimit(): number | null;

    setOffset(offset: number): void;
    getOffset(): number | null;

    setOrderBy(orderBy: string): void;
    getOrderBy(): string | null;

    setOrderDirection(orderDirection: string): void;
    getOrderDirection(): string | null;
}

export default Filter;
