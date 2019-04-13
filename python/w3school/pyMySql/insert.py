from config.db import pyDb

pyCursor = pyDb.cursor()
prepareStatement = "INSERT INTO customers(name, address) VALUES(%s, %s)"
prepareValues = ['John', 'Highway 21']
pyCursor.execute(prepareStatement, prepareValues)

pyDb.commit()
print(pyCursor.rowcount, 'Record Inserted')
print("Last row id: ", pyCursor.lastrowid)
