var http = require('http');  
var express = require('express');
var app = express();
var httpServer = http.createServer(app);

app.use(express.static(__dirname + '/app')); 

var server = http.createServer( app ).listen( '3000', function() {
    console.log('Express server listening on port 3000');
} );
var open = require('open');
  open('http://localhost:3000/', function (err) {
    if (err) throw err;
  });

