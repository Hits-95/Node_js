const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    user: "Hitesh",
    password: "online"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected...")
});  