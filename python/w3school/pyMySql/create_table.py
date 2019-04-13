from config.db import pyDb

pyCursor = pyDb.cursor()

sqlCommand = "CREATE TABLE customers(name VARCHAR(255), address VARCHAR(255))"
pyCursor.execute(sqlCommand)

sqlCommand = "CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), fav INT)"
pyCursor.execute(sqlCommand)

sqlCommand = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))"
pyCursor.execute(sqlCommand)

sqlCommand = "CREATE TABLE testing(name VARCHAR(255), address VARCHAR(255))"
pyCursor.execute(sqlCommand)