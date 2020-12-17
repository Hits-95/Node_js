const MongoClient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017/";
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("connected...");
    var database = db.db("node");

    var data = [
        { _id: 2, name: 'pd', add: 'tehare' },
        { _id: 3, name: 'vrushali', add: 'mugase' },
        { _id: 4, name: 'sakshi', add: 'online' },
        { _id: 5, name: 'vishakha', add: 'malegaon' },
        { _id: 6, name: 'shamal', add: 'malegaon' },
        { _id: 7, name: 'pooja', add: 'kavlane' },
        { _id: 8, name: 'shruti', add: 'dhule' },
        { _id: 9, name: 'nikita', add: 'pachore' },
        { _id: 10, name: 'komal', add: 'jalgaon' },
        { _id: 11, name: 'lajari', add: 'lakhamapur' },
        { _id: 12, name: 'kiran', add: 'pachore' }
    ];

    database.collection("customers").insertMany(data, function (err, res) {
        if (err) throw err;
        console.log("no of ducument inserted : ", res.insertedCount);
        console.log(res);
        db.close();
    });
});
