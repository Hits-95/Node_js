// Create a node.js file that Insert Multiple Records in "student" table, and display the result object on console

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
    var data = [
        [1, 'PD', 'Tehare'],
        [2, 'sakshi', 'online'],
        [3, 'vishakha', 'malegaon'],
        [4, 'vrushali', 'mugse'],
        [5, 'puja', 'kavlane'],
        [6, 'nikita', 'pachora'],
        [7, 'shruti', 'dhule'],
        [8, 'komal', 'dhule'],
    ];
    var qry = "INSERt INTO student (rollno, name, addr) values ?";
    con.query(qry, [data], function (err, result) {
        if (err) throw err;
        console.log(result);

    });
});
