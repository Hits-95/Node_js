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
    //fire query...
    var qry = "INSERt INTO customers (name, addr) values ('Shubham', 'Dabli')";
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, id : " + result.insertId);
    });
});
