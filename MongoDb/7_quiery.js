const { connected } = require("process");

const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    //quiery...
    var database = db.db("node");
    //var qry = { add: "malegaon" };
    /*
    *Regular expression
     */

    var qry = { name: /^s/ };
    database.collection("customers").find(qry).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});