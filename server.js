var express = require('express');
var app = express();
var http = require('http');
var pathutil = require('path');
var _ = require('lodash')

var httpServer = http.createServer(app);

var PORT = 80;

let testPath = pathutil.resolve(__dirname, './')
app.use('/', express.static(testPath));

var server = httpServer.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log('HTTP http://localhost:%s', port);
});
