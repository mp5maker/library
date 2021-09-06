var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);
connection.connect(function(error) {
    if (error) throw error;
    const query = "SELECT name FROM CUSTOMERS WHERE id = ?";
    connection.query(query, [7], function(error, results) {
        if (error) throw error;
        console.log(results);
    })

    var address = 'Mountain 21';
    var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(address);
    connection.query(sql, function (error, result) {
        if (error) throw error;
        console.log(result);
    });

    connection.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
})