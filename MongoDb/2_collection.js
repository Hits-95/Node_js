const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/node";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");
    database.createCollection("customers", function (err, res) {
        if (err) throw err;
        console.log("collection created...");
    });
});