const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/node";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
});