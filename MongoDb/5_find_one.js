const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected");
    var database = db.db("node");
    database.collection("customers").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result);  //result.name, result.id like that...
        db.close();
    });
});