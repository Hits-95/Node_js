const MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://Hitesh:online@cluster0.w9ui5.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
});