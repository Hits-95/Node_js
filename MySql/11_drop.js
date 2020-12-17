const mysql = require("mysql");
const { threadId } = require("worker_threads");

const con = mysql.createConnection({
    host: "localhost",
    user: "Hitesh",
    password: "online",
    database: "node"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected...");

    var qry = "DROP TABLE customers1";
    con.query(qry, function (err, result, field) {
        if (err) throw err;
        console.log("table deleted...");
    });
});  