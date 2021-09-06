var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);

connection.connect(function (error) {
    if (error) throw error;
    var query = "DELETE FROM customers WHERE id = ?";
    connection.query(query, [15], function (error, results) {
        if (error) throw error;
        console.log(results.affectedRows);
    })
})