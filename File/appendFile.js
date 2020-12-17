var fs = require('fs');

//create a file name of hitesh.txt
fs.appendFile('hitesh.txt', 'write and execute all programs that i have uploaded in my e learning videos and LMS videos upto chapter 6', function (err) {
    if (err) throw err
    console.log('data updated...');
});