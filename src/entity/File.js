import Entity from './Entity';

class File extends Entity {
    setName(name) {
        this.set('name', name);
    }

    getName() {
        return this.get('name');
    }

    setContent(content) {
        this.set('content', content);
    }

    getContent() {
        return this.get('content');
    }

    setMimeType(mimeType) {
        this.set('mime_type', mimeType);
    }

    getMimeType() {
        return this.get('mime_type');
    }

    setSize(size) {
        this.set('size', size);
    }

    getSize() {
        return this.get('size');
    }
}

export default File;
