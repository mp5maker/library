var config = require('./Settings')
var mysql = require('mysql');

delete config.settings.database;

var connection = mysql.createConnection(config.settings)
connection.connect(function(error) {
    if (error) throw error;
    console.log("Connected");
    const query = "CREATE DATABASE nodejs_mysql"
    connection.query(query, function(error, result) {
        if (error) throw error;
        console.log('Database Created');
    })
})