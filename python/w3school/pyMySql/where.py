from config.db import pyCursor

prepareStatement = "SELECT name, address FROM customers WHERE name = %s"
prepareValues = ['Amy']

pyCursor.execute(prepareStatement, prepareValues)
results = pyCursor.fetchall()

for customer in results:
    print(customer)