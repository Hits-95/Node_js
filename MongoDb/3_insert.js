const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");
    var obj = { _id: 1, name: "hitesh", addr: "dabli" };
    database.collection("customers").insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log("1 : ducument inserted...");
        db.close();
    });
});