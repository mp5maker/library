from config.db import pyTestingCollection

deleted = pyTestingCollection.delete_many({})
print(deleted.deleted_count, " Documents Deleted.")
