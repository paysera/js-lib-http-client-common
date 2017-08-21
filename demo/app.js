/**
 * @param {Scope} scope
 * @returns {Promise.<Token>}
 */
function refreshTokenProviderFunction(scope) {
    //custom implementation, should return promise with payseraHttpClientCommon.Token
    return fetch(
        'http://localhost:3000/token',
        {
            method: 'post',
            body: JSON.stringify({
                'scope': scope.getValue()
            })
        }
    ).then((response) => {
        return response.json();
    }).then((response) => {
        return new payseraHttpClientCommon.Token(scope, 'Bearer ' + response.token_value);
    });
}

/**
 * @param {Scope} scope
 * @returns {Promise.<Token>}
 */
function initialTokenProviderFunction(scope) {
    //custom implementation, should return promise with payseraHttpClientCommon.Token
    return Promise.resolve('this-is-expired-token-string').then((value) => {
        return new payseraHttpClientCommon.Token(scope, 'Bearer ' + value)
    });
}

var factory = ClientFactory.create({
    baseUrl: 'http://localhost:3000',
    refreshTokenProvider: refreshTokenProviderFunction
});

var initialTokenProvider = new payseraHttpClientCommon.TokenProvider(
    new payseraHttpClientCommon.Scope('some:scope'),
    initialTokenProviderFunction
);

var client = factory.getAccountsApiClient(initialTokenProvider);

var filter = new AccountFilter();
filter.type = 'someType';

client.getAccounts(filter).then(function (result) {
    for (let account of result) {
        console.log(account);
    }

    document.getElementById('output-container').textContent = JSON.stringify(result, null, 2);
});
