const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const dirpath = './packs'
var entries = {}
fs.readdirSync(dirpath).filter( (f) => { return ( f.indexOf('js') > -1 ) } ).forEach((file, i) => {
    entries[(file.replace(/\.[^/.]+$/, ""))] = `${dirpath}/${file}`
})

module.exports = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.resolve('./static', 'packs')
    },
    resolve: {
        modules: [
            'node_modules',
            '.'
        ],
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ],
                    plugins: [
                        "syntax-dynamic-import",
                        "transform-object-rest-spread",
                        [
                            "transform-class-properties",
                            {
                                "spec": true
                            }
                        ]
                    ]
                }
            }
        ]
    }
};