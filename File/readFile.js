const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    //read data of file...
    fs.readFile("./temp.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data); // write on browser
      return res.end();
    });
  })
  .listen(9517, console.log("Server is running..."));
