const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");

    /**
     * update one document...
     */
    // var qry = { add: "tehare" };
    // var newValue = { $set: { name: "Pradhunya", addr: "Tehare" } };
    //database.collection("customers").updateOne(qry, newValue, function (err, result) {
    /**
     * update many document...
     * 
     */
    var qry = { name: /^k/ };
    var newValue = { $set: { name: "Pradhunya", addr: "Tehare" } };
    database.collection("customers").updateMany(qry, newValue, function (err, result) {
        if (err) throw err;
        console.log(result.result.n, "updated");
        console.log(result.modifiedCount, "updated");// if data will be modify then value be change...
        console.log(result.matchedCount, ": data matched.");
        db.close();

    });
});