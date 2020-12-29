const MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://Hitesh:online@cluster0.w9ui5.mongodb.net/node?retryWrites=true&w=majority";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");
    var obj = { _id: 13, name: "Ram", addr: "dabli" };
    database.collection("customers").insertOne(obj, function (err, res) {
        if (err) throw err;
        console.log("1 : ducument inserted...");
        db.close();
    });
});