const MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Hitesh:online@cluster0.w9ui5.mongodb.net/<dbname>?retryWrites=true&w=majority";

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