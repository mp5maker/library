var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);

connection.connect(function (error) {
    if (error) throw error;
    var query = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    connection.query(query, function (error, results) {
        results.forEach((customer) => {
            console.log(customer);
        })
    })
    var query = "SELECT * FROM customers LIMIT 3,5";
    connection.query(query, function (error, results) {
        results.forEach((customer) => {
            console.log(customer);
        })
    })
})