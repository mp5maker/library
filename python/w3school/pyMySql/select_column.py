from config.db import pyCursor

sqlCommand = "SELECT name FROM customers"
pyCursor.execute(sqlCommand)
results = pyCursor.fetchall()

for customer in results:
    print(customer)