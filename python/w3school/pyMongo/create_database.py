import pymongo

# Database is not created until it gets contents
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client['py_mongo']
# It needs to have create collection and create document
