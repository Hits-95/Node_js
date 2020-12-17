var fs = require("fs");

//opne a  file l.e create empty file..
fs.open("open.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("empty file created.....");
});
