from config.db import client

pyDb = client['py_mongo']
pyCollection = pyDb['customers']

collectionNames = pyDb.list_collection_names()
if 'customers' in collectionNames:
    print('Customers collection is there in mongo db')
