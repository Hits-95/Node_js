const fs = require("fs");

fs.readFile('file1.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});