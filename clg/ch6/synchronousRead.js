const fs = require('fs');

var data = fs.readFileSync('hina.txt', 'utf-8');
console.log(data);