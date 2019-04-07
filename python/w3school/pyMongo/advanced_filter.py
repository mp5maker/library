from config.db import pyCustomerCollection

query = {
    "address": {
        "$gt": "S"
    }
}

""" Search for Letter S or greater than S """
for customer in pyCustomerCollection.find(query):
    print(customer)