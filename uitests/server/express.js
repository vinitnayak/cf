var path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../../dist');
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV ==='production') {
    var express = require('express')
    const port = 8080;
    var app = express()
    app.use('/', express.static(BUILD_DIR))
    app.listen(port)
    console.log('======================================================>');
    console.log('Starting Web server at http://localhost:'+port+'/');
    console.log('======================================================>');
    console.log('Starting JSON Server for mock REST APIs');
}