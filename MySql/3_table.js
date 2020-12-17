const mysql = require("mysql");

con = mysql.createConnection({
    host: "localhost",
    user: "Hitesh",
    password: "online",
    database: "node"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected...");
    //create table...
    var qry = "CREATE TABLE customers (NAME text, ADDR text)";
    // var qry = "ALTER TABLE customers ADD COLUMN id int(3) AUTO_INCREMENT PRIMARY KEY";
    con.query(qry, function (err, result) {
        if (err) throw errr;
        console.log("table created...");
    });
});