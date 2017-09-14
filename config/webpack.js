const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:  {
        'babel.polyfill': ['babel-polyfill'],
        lib: path.resolve(__dirname, '../src/module.js'),
        'lib.min': path.resolve(__dirname, '../src/module.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'payseraHttpClientCommon'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                use: [
                    {
                        loader: 'ng-annotate-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'stage-0']
                        }
                    },
                ],
            }
        ],
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '../src')
        ],
        extensions: ['.js']
    },
    devtool: 'source-map',
    context: path.resolve(__dirname, '../'),
    target: 'web',
    externals: {
        axios: 'axios'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        })
    ]
};
