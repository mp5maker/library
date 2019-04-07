from config.db import pyCustomerCollection

query = {
    "address": "Valley 345"
}

newValue = {
    "$set": {
        "address":  "Canyon 123"
    }
}

pyCustomerCollection.update_one(query, newValue)

for customer in pyCustomerCollection.find():
    print(customer)