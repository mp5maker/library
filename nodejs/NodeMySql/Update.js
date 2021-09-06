var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);

connection.connect(function (error) {
    if (error) throw error;
    var query = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    connection.query(query, function (error, results) {
        if (error) throw error;
        console.log(results.affectedRows);
    })
})