from config.db import pyTestingCollection

query = {
    "address": {
        "$regex": "^S"
    }
}

deleted = pyTestingCollection.delete_many(query)
print(deleted.deleted_count, " Documents Deleted.")
