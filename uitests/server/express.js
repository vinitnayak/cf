var path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../../dist');
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV ==='production') {
    var express = require('express')
    const port = 9090;
    var app = express()
    app.use('/', express.static(BUILD_DIR))
    app.listen(port)
    console.log('======================================================>');
    console.log('Starting Web server at http://localhost:'+port+'/');
    console.log('======================================================>');
    console.log('Starting JSON Server for mock REST APIs');
   /* app.get('/svc/v1/*', function (req, res) {        
        var options = {
            host: url,
            port:300024,
            path: '/*',
            method: 'GET'
          };
          var response = {};
        http.request(options, function(res) {
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
              console.log('BODY: ' + chunk);
              response = chunk;
            });
          }).end();
          res.send(response);
      });*/
}