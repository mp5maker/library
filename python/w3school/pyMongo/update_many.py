from config.db import pyCustomerCollection

query = {
    "address": {
        "$regex": "^H"
    }
}

newValue = {
    "$set": {
        "name":  "Minnie"
    }
}

modified = pyCustomerCollection.update_many(query, newValue)
print(modified.modified_count, " documents updated.")
