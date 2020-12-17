// Create a node.js file that Select all records from the "customers" table, and delete the specified record. 

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

    var qry = "DELETE FROM customers WHERE name = 'hitesh' ";
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows, ": record deleted.");
    });
});
