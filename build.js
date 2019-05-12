let webpack = require('webpack')
let _ = require('lodash')
let pathutil = require('path')
var execSh = require("exec-sh");
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

execSh(`tsc`, {}, function(err, stdout, stderr){
    if (err) {
      console.log("aExit-code: ", err.code);
      return;
    }

    let config = require('./webpack.config.dev')
    let compiler = webpack(config);
    compiler.run((err, stats) => {
        console.log('err', err, stats)
    });

});
return;


// config = require('./webpack.config.prod')
// let compiler_p = webpack(config)
// compiler_p.run((err, stats) => {
//     console.log('err_p', err)
// });