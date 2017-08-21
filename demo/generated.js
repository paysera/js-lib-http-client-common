class AccountsApiClient {

    /**
     * @param {ClientWrapper} client
     */
    constructor(client) {
        this.client = client;
    }

    /**
     * @param {AccountFilter} filter
     * @returns {Promise.<AccountResult>}
     */
    getAccounts(filter) {
        let request = payseraHttpClientCommon.RequestFactory.create('GET', '/accounts', filter);

        return this.client
            .performRequest(request)
            .then(function (data) {
                return new AccountResult(data, 'accounts');
            })
        ;
    }
}

class ClientFactory extends payseraHttpClientCommon.ClientFactoryBase {

    /**
     * @param {ClientWrapper} client
     */
    constructor(client) {
        super();
        this.client = client;
    }

    /**
     * @param {object|null} options
     * @returns {ClientFactory}
     */
    static create(options = null) {
        return new ClientFactory(this.prototype.getClient(options));
    }

    /**
     * @returns {string}
     */
    getBaseUrl() {
        return 'http://localhost:3000';
    }

    /**
     * @param {TokenProvider|null} provider
     *
     * @returns {AccountsApiClient}
     */
    getAccountsApiClient(provider = null) {
        this.client.setTokenProvider(provider);
        return new AccountsApiClient(this.client);
    }
}

class Account extends payseraHttpClientCommon.Entity {

    /**
     * @return {string}
     */
    get number() {
        return this.get('number');
    }

    /**
     * @param {string} number
     */
    set number(number) {
        this.set('number', number);
    }
}

class AccountFilter extends payseraHttpClientCommon.Filter {

    /**
     * @return {string}
     */
    get type() {
        return this.get('type');
    }

    /**
     * @param {string} type
     */
    set type(type) {
        this.set('type', type);
    }
}

class AccountResult extends payseraHttpClientCommon.Result {

    /**
     * @param {object} data
     * @returns {Account}
     */
    createItem(data) {
        return new Account(data);
    }
}
