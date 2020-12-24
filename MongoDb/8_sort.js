const { threadId } = require("worker_threads");

const MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Hitesh:online@cluster0.w9ui5.mongodb.net/<dbname>?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");
    /*
    * name : 1 assending order...
    */
    // var qry = { name: 1 }
    /*
    * name : -1 desending order...
    */
    var qry = { name: -1 };
    database.collection("customers").find().sort(qry).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
