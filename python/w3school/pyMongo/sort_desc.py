from config.db import pyCustomerCollection

for customer in pyCustomerCollection.find().sort("name", -1):
    print(customer)
