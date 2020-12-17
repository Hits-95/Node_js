const http = require('http');
const uc = require('upper-case');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    /*Use our upper-case module to upper case a string:*/
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(9517, console.log('Server is running...'));