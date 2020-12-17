const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "Hitesh",
    password: "online"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected...");

    //create database...
    con.query("CREATE DATABASE node", function (err, result) {
        if (err) throw err;
        console.log("database created...");
    });
});