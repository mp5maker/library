var config = require('./Settings');
var mysql = require('mysql');

var connection = mysql.createConnection(config.settings);
connection.connect(function (error) {
    if (error) throw error;
    // var query = " \
    //             CREATE TABLE testing \
    //             (id INT AUTO_INCREMENT PRIMARY KEY, \
    //             name VARCHAR(255), \
    //             address VARCHAR(255)) \
    //         ";
    // connection.query(query, function (error, result) {
    //     if (error) throw error;
    //     console.log("TABLE CREATED");
    // })

    var sql = "DROP TABLE IF EXISTS testing";
    connection.query(sql, function (error, result) {
        if (error) throw error;
        console.log(result);
    });
})

