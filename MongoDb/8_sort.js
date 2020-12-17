const { threadId } = require("worker_threads");

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

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
