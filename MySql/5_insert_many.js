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
        ['sakshi', 'online'],
        ['PD', 'Tehare'],
        ['vishakha', 'malegaon'],
        ['vrushali', 'mugse'],
        ['puja', 'kavlane'],
        ['lajari', 'lakhmapur'],
        ['shamal', 'malegaon'],
        ['nikita', 'pachora'],
        ['kiran', 'pachora'],
        ['shruti', 'dhule'],
        ['komal', 'dhule'],
    ];
    var qry = "INSERt INTO customers (name, addr) values ?";
    con.query(qry, [data], function (err, result) {
        if (err) throw err;
        console.log("No of record inserted : " + result.affectedRows);
    });
});

/*{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
}*/