var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../build');
var APP_DIR   = path.resolve(__dirname, '../app')

var loaders =

module.exports = {
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules|build/
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    }
};
