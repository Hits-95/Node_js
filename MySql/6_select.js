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
    //var qry = "SELECT name FROM customers";
    //var qry = "SELECT * FROM customers WHERE addr LIKE 't%'";
    // var qry = "SELECT * FROM customers where ADDR = 'dabli'";
    con.query(qry, function (err, result, fields) {
        if (err) throw err;
        console.log("Result : ", result);
        //console.log(fields);
    });
});