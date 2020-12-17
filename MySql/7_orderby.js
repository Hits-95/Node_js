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

    //var qry = "SELECT * FROM customers ORDER BY name";
    var qry = "SELECT * FROM customers ORDER BY name DESC";
    con.query(qry, function (err, result) {
        if (err) throw err;
        console.log("Result : ", result);
    });
});
