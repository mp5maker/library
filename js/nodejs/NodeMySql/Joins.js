var mysql = require('mysql');
var config = require('./Settings');

var connection = mysql.createConnection(config.settings);
connection.connect((error) => {
    // if (error) throw error;
    // var users = "CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product INT)";
    // connection.query(users, (error, results) => {
    //     if (error) throw error;
    //     console.log("Users Table have been created");
    // })

    // var products = "CREATE TABLE IF NOT EXISTS products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
    // connection.query(products, (error, results) => {
    //     if (error) throw error;
    //     console.log("Products Table have been created");
    // })

    // var usersList = [
    //     [ 'John', 1 ],
    //     [ 'Peter', 2 ],
    //     [ 'Amy', 3 ],
    //     [ 'Hannah', 3],
    //     [ 'Michael', 2]
    // ]

    // var productsList = [
    //     [ 'Chocolate Heaven' ],
    //     [ 'Tasty Lemons' ],
    //     [ 'Vanilla Dreams' ]
    // ]

    // var query = "INSERT INTO users(name, favorite_product) VALUES ?";
    // connection.query(query, [usersList], (error, results) => {
    //     if (error) throw error;
    //     console.log(results.affectedRows);
    // })

    // var query = "INSERT INTO products(name) VALUES ?";
    // connection.query(query, [productsList], (error, results) => {
    //     if (error) throw error;
    //     console.log(results.affectedRows);
    // })

    var query = `
            SELECT u.name AS name, p.name AS product
            FROM users AS u
            INNER JOIN products AS p
            ON u.favorite_product = p.id
        `;
    connection.query(query, (error, results) => {
        if (error) throw error;
        results.forEach((users) => {
            console.log(users);
        })
    })
})