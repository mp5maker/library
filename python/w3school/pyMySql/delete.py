from config.db import pyDb, pyCursor

prepareStatement = "DELETE FROM customers where address = %s"
prepareValues = ['Highway 21']

pyCursor.execute(prepareStatement, prepareValues)
pyDb.commit()

print(pyCursor.rowcount, 'Record(s) deleted')
