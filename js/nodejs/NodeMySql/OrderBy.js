var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);

connection.connect(function(error) {
    if (error) throw error;
    var query = "SELECT * FROM customers ORDER BY name";
    connection.query(query, function(error, results) {
        results.forEach((customer) => {
            console.log(customer);
        })
    })

    var query = "SELECT * FROM customers ORDER BY name DESC";
    connection.query(query, function(error, results) {
        results.forEach((customer) => {
            console.log(customer);
        })
    })
})