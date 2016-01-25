/**
 * Created by y.evtushenko on 29.12.15.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index",
    output: {
        path: "./static",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Playlist player'
        })
    ],
    //devtool: 'inline-source-map'
};