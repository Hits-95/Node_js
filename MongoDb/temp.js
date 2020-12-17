
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Hitesh:online@cluster0.uk7vj.mongodb.net/node?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(function (err) {
    if (err)
        throw err;
    else
        console.log("connected...");
});