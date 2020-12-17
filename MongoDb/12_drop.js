const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");
    /**
     * drop() method...
     */
    // database.collection("customers").drop(function (err, result) {
    /**
     * dropCollection() method...
     */
    database.dropCollection("customers", function (err, result) {
        if (err) throw err;
        if (result) console.log("Collection deleted");
        console.log(result);

        db.close(function () {
            console.log("connection end.");
        });
    });
});