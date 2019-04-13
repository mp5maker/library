from config.db import pyCursor

prepareStatement = "SELECT * FROM customers WHERE address LIKE '%way%'"
pyCursor.execute(prepareStatement)

results = pyCursor.fetchall()

for customer in results:
    print(customer)