from config.db import pyCursor

sqlCommand = "SELECT * FROM customers LIMIT 5"
pyCursor.execute(sqlCommand)

results = pyCursor.fetchall()
for customer in results:
    print(customer)