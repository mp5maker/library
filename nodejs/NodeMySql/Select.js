var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);
connection.connect(function(error) {
    if (error) throw error;
    const query = "SELECT * from customers";
    connection.query(query, function(error, results, fields) {
        if (error) throw error;
        results.forEach((customer) => {
            console.log(customer);
        })
        console.log(fields);
    })
})