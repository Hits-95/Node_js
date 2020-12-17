const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "Hitesh",
    password: "online",
    database: "node"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected.");

    var qry = "UPDATE customers SET addr = 'vaitakwadi' WHERE name = 'shubham'";
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows, "record(s) updated.")
    });
});
