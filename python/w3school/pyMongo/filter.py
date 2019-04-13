from config.db import pyCustomerCollection

where = { "address": "Park Lane 38" }

for customer in pyCustomerCollection.find(where):
    print(customer)
