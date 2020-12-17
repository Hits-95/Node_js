var http = require('http');
var dt = require('./Module');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());

    res.end();
}).listen(9517, () => {
    console.log('Server is running...');
});      