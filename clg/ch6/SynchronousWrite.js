const fs = require('fs');

//read data from hina.txt
var data = fs.readFileSync('hina.txt', 'utf-8');

//write data into write.txt file
fs.writeFileSync('write.txt', data);

