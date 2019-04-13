from config.db import pyCustomerCollection

query = {
    "address": {
        "$regex": "^S"
    }
}

""" Starts with S """
for customer in pyCustomerCollection.find(query):
    print(customer)