import pymongo

client = pymongo.MongoClient("mongodb://localhost:27017/")

pyDb = client['py_mongo']
pyCustomerCollection = pyDb['customers']