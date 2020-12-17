const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");

    /**
     * deleteOne() 
     * var qry = { add: "pachore" };
     */
    // database.collection("customers").deleteOne(qry, function (err, result) {
    /**
     * deleteMany()
     */
    var qry = { name: /^s/ };
    database.collection("customers").deleteMany(qry, function (err, result) {
        if (err) throw err;
        console.log(result.deletedCount, "document deleted....");
        console.log(result.result.n, "document(s) deleted .")
        db.close();
    });
});