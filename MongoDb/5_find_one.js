const MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://Hitesh:online@cluster0.w9ui5.mongodb.net/<dbname>?retryWrites=true&w=majority";
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