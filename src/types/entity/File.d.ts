import Entity from './Entity';

declare class File extends Entity {
    setName(name: string): void;
    getName(): string | null;
    setContent(content: string): void;
    getContent(): string | null;
    setMimeType(mimeType: any): void;
    getMimeType(): string | null;
    setSize(size: number): void;
    getSize(): number | null;
}

export default File;
