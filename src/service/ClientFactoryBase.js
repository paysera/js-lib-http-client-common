import axios from 'axios';

import ClientWrapper from './ClientWrapper';

class ClientFactoryBase {

    /**
     * @param {object|null} options
     * @returns {ClientWrapper}
     */
    getClient(options = null) {
        const baseUrl = options && options.baseUrl !== 'undefined' ? options.baseUrl : this.getBaseUrl();
        const instance = axios.create({
            baseURL: baseUrl,
        });

        return new ClientWrapper(instance, options);
    }
}

export default ClientFactoryBase;
