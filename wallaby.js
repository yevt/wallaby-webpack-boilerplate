//'use strict';

var babel = require('babel-core');
var wallabyWebpack = require('wallaby-webpack');
var webpackConfig = require('./webpack.config');
delete(webpackConfig.devtool);
var webpackPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {

    return {
        files: [
            { pattern: 'src/*.js', load: false }
        ],

        tests: [
            { pattern: 'test/*Spec.js', load: false }
        ],

        //compilers: {
        //    '**/*.js': wallaby.compilers.babel({ babel: babel })
        //},

        postprocessor: webpackPostprocessor,

        bootstrap: function () {
            window.__moduleBundler.loadTests();
        }
    };
};