/**
 * create server...
 */

const http = require('http')
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write("server running...");
    res.end();
}).listen(9517, console.log('server running...'));