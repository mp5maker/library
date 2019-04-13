from config.db import pyCustomerCollection

for customer in pyCustomerCollection.find().limit(5):
    print(customer)