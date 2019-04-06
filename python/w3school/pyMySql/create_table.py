from config.db import pyDb

pyCursor = pyDb.cursor()
sqlCommand = "CREATE TABLE customers(name VARCHAR(255), address VARCHAR(255))"
pyCursor.execute(sqlCommand)