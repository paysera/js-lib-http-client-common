declare class Entity {
    constructor(data?: any);

    get(key: string): string | number | object | null;
    set(key: string, value: any): void;
    getData(): any;
}

export default Entity;
