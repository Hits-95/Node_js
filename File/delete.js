var fs = require('fs');

fs.unlink('hitesh.txt', function (err) {
    if(err) throw err;
    console.log('fiel deleted...');
});