from config.db import pyTestingCollection

query = {
    "address": "Mountain 21"
}

pyTestingCollection.delete_one(query)
