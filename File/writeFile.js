var fs = require('fs');

//replace exixting data ...
fs.writeFile('open.txt', 'data is updated here...', function (err) {
    if(err) throw err;
    console.log('data replaced...')
});