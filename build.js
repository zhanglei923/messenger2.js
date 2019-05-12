let webpack = require('webpack')
let _ = require('lodash')
let pathutil = require('path')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let config = require('./webpack.config.dev')
let compiler = webpack(config);
compiler.run((err, stats) => {
    console.log('err', err, stats)
});

// config = require('./webpack.config.prod')
// let compiler_p = webpack(config)
// compiler_p.run((err, stats) => {
//     console.log('err_p', err)
// });