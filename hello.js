const http = require('http');

http.createServer(function (req, res) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   res.end('server is running');
}).listen(9517, () => { // annonimus function...
   console.log('Server is running.....');
});