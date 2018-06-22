const {
    requestFactory,
    clientFactory,
    JWTAuthenticationMiddleware,
    Scope,
    SessionStorageTokenProvider
} = window.PayseraHttpClientCommon;

class DemoClient {
    constructor(client) {
        this.client = client;
    }

    getList() {
        return this.client.performRequest(requestFactory('get', '/list'));
    }
}

const mock = new window.AxiosMockAdapter(window.axios);
mock.onGet('/list').reply(200, 'data');

const client = new DemoClient(
    clientFactory({
        baseURL: 'https://demo.com',
        middleware: [
            new JWTAuthenticationMiddleware(
                new Scope('scope:a'),
                new SessionStorageTokenProvider(
                    (scope) => ({ scope, accessToken: 'created-token' }),
                    (scope) => ({ scope, accessToken: 'refreshed-token' }),
                    'identifier',
                    'namespace'
                )
            )
        ]
    })
);

client.getList()
    .then(response => { console.log('response:', response); })
    .catch(error => console.error('error:', error));
