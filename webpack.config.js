const path = require('path');

module.exports = (env, argv) => {
    const config = {
        output: {
            libraryTarget: 'umd',
            library: 'PayseraHttpClientCommon',
            globalObject: "typeof self !== 'undefined' ? self : this"
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader'
                        },
                    ],
                }
            ],
        },
        devtool: 'source-map',
        context: path.resolve(__dirname, '.'),
        target: 'web',
        externals: {
            axios: 'axios',
            store: 'store'
        }
    };

    if (argv.mode === 'development') {
        config.devServer = {
            contentBase: [
                path.join(__dirname, 'demo'),
                path.join(__dirname, 'node_modules'),
            ],
            watchContentBase: true,
            port: 9000
        };
    }

    return config;
};
