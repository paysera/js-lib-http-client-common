import Request from '../entity/Request';

/**
 * @param {string} method
 * @param {string} path
 * @param {Entity|null} entity
 *
 * @returns {Request}
 */
export default (method, path, entity = null) => {
    const lowerCaseMethod = method.toLowerCase();
    let parameters = null;
    let payload = null;

    if (entity !== null) {
        payload = entity.getData();
    }

    if (lowerCaseMethod === 'get') {
        parameters = payload;
        payload = null;
    }

    return new Request(lowerCaseMethod, path, parameters, payload);
};
