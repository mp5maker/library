from config.db import pyCursor

sqlCommand = "SELECT * FROM customers ORDER BY name"
pyCursor.execute(sqlCommand)

results = pyCursor.fetchall()
for customer in results:
    print(customer)