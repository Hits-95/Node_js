var fs = require('fs');

fs.rename('hitesh.txt', 'online.txt', function (err){
    if(err) throw err;
    console.log('file renamed...');
});