from config.db import pyDb

pyCursor = pyDb.cursor()
mysqlCommand = "SELECT * from customers"
pyCursor.execute(mysqlCommand)
myResult = pyCursor.fetchone()

print(myResult)