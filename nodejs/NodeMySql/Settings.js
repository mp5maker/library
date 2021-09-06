var mysql = require('mysql');

var settings = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs_mysql'
}

var settingsCopy = Object.assign({}, settings);
delete settingsCopy.database;

var connection = mysql.createConnection(settingsCopy)

connection.connect(function(error) {
    if (error) throw error;
    console.log('Connected');
})

exports.settings = settings;