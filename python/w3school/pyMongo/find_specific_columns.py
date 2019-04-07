
from config.db import pyCustomerCollection

relevantColumns = {
    "_id": 0,
    "name": 1,
}

""" 0 or 1 is important if we want to include or exclude _id or not """
for customer in pyCustomerCollection.find({}, relevantColumns):
    print(customer)
