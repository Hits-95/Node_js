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
    /**
     * Note: The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"
     */
    // var qry = "SELECT * FROM customers LIMIT 5";
    //var qry = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    var qry = "SELECT * FROM customers LIMIT 2,5";
    con.query(qry, function (err, result, fields) {
        if (err) throw err;
        console.log("Result : ", result);
        //console.log(fields);
    });
});