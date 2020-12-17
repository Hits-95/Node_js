// Create a Node.js file that opens the requested file and returns the content to the client.If anything goes wrong, throw a 404 error
var fs = require("fs");

fs.readFile("file1.txt", "", function (err, data) {
    if (err)
        console.log("error 404.");
    console.log("Data :  ", data.toString());
});
