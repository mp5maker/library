var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);
connection.connect(function(error) {
    if (error) throw error;
    const query = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')"
    connection.query(query, function(error, result) {
        if (error) throw error;
        console.log("1 record Inserted");
    })
})

