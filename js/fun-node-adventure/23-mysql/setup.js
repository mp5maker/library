require('dotenv').config()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})


db.query('CREATE DATABASE IF NOT EXISTS `cart-example`')
db.query('USE `cart-example`')

db.query('DROP TABLE IF EXISTS item')
db.query(`
    CREATE TABLE item(
        id INT(11) AUTO_INCREMENT,
        title VARCHAR(255),
        description TEXT,
        created DATETIME,
        PRIMARY KEY (id)
    )
`)
db.query('DROP TABLE IF EXISTS review')
db.query(`
    CREATE TABLE review(
        id INT(11) AUTO_INCREMENT,
        item_id INT(11),
        text TEXT,
        stars INT(1),
        created DATETIME,
        PRIMARY KEY (id)
    )
`)

db.end