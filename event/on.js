var fs = require('fs');
var uc = require('upper-case');


fs.createReadStream('../File/online.txt').on('open', function () {
    fs.appendFile('../File/online.txt', uc.upperCase('data is here') , function (err) {
        if (err) throw err;
        console.log('data write...');
    })
    console.log('The file is open');
});
