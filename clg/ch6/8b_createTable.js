const mysql = require("mysql");

con = mysql.createConnection({
    host: "localhost",
    user: "Hitesh",
    password: "online",
    database: "node"
});

con.connect(function (err) {
    if (err) throw err
    console.log("connected...");
    //create table...
    var qry = "CREATE TABLE student (Rollno int ,NAME text, ADDR text)";
    con.query(qry, function (err, result) {
        if (err) throw errr
        console.log("table created...");
    });
});