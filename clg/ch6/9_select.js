//Create a node.js file that Select all records from the "customers" table, and display the result object on console

const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "Hitesh",
    password: "online",
    database: "node"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected...");
    var qry = "SELECT * FROM customers";
    con.query(qry, function (err, result, fields) {
        if (err) throw err;
        console.log("Result : ", result);
        //console.log(fields);
    });
});