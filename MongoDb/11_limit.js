const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");
    database.collection("customers").find().limit(5).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    });
    db.close(function () {
        console.log("connection end.");
    });
});