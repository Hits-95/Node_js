const MongoClient = require("mongodb").MongoClient;

var url = "mongodb+srv://Hitesh:online@cluster0.w9ui5.mongodb.net/<dbname>?retryWrites=true&w=majority";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected");
    var database = db.db("node");
    /*
    * find all
     */
    //database.collection("customers").find({}).toArray(function (err, result) { 
    /*
    *find some one colm
    */
    database.collection("customers").find({}, { projection: { add: 0 } }).toArray(function (err, result) { //other field valu auto 1 
        if (err) throw err;
        console.log(result);  //result.name, result.id like that...
        db.close();
    });
});