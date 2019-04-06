import mysql.connector

dbSettings = {
    "user": "root",
    "passwd": "",
    "host": "localhost",
}

pyDb = mysql.connector.connect(
    host=dbSettings['host'],
    user=dbSettings['user'],
    passwd=dbSettings['passwd'],
)

pyCursor = pyDb.cursor()
sqlCommand = "SHOW DATABASES"
pyCursor.execute(sqlCommand)

for database in pyCursor:
    print(database)