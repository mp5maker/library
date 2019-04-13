from config.db import pyCustomerCollection

for customer in pyCustomerCollection.find():
    print(customer)