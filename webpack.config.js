require('dotenv').config();
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname + "/resources",
    entry: {
        main: './js/main',
        styles: './css/app'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.styl']
    },

    output: {
        path: __dirname + "/public",
        filename: "/js/[name].js",
        publicPath: '/js/'
    },

    watch: process.env.NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: process.env.NODE_ENV == 'development' ? 'source-map' : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('css/[name].css', {allChunks: true}),
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 versions')
            }, {
                test: /\.styl/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 versions!stylus?resolve url')
            }
        ]
    }
};