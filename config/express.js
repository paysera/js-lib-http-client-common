const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.get('/accounts', function (req, res) {
    if (req.header('Authorization') !== 'Bearer valid-token') {
        console.log('Got auth header: ' + req.header('Authorization'));

        res.status(401);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({'error': 'invalid token'}));
        return;
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
        "accounts": [
            {
                "number": "EVP123456789",
                "active": true,
                "client_id": 1,
                "closed": false
            },
            {
                "number": "EVP456789123",
                "active": false,
                "client_id": 2,
                "closed": true
            }
        ],
        "_metadata": {
            "total": 5,
            "limit": 2,
            "offset": 0
        }
    }));
});

app.post('/token', function (req, res) {
    console.log('Issuing new token');

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
       'token_value': 'valid-token'
    }));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000, visit http://localhost:3000/demo/index.html')
});
