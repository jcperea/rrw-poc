import webpack from 'webpack';
import path from 'path';

module.exports = {
    module: {
        loaders: [
              test: [/\.jsx?$/],
              include: [/src/],
              loader: 'babel-loader',
              exclude: ['/node_modules/', '/server/', '/build/'],
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    }
};
