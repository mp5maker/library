from config.db import pyDb, pyCursor

prepareStatement = "UPDATE customers SET address = %s WHERE id = %s"
prepareValues = ("Valley 345", 3)
pyCursor.execute(prepareStatement, prepareValues)
pyDb.commit()

print(pyCursor.rowcount, "records(s) affected")