import mysql.connector

dbSettings = {
    "host": "localhost",
    "user": "root",
    "passwd": "",
}

myDb = mysql.connector.connect(
    host=dbSettings['host'],
    user=dbSettings['user'],
    passwd=dbSettings['passwd'],
)

myCursor = myDb.cursor()
sqlCommand = "CREATE DATABASE " + dbSettings['db']
myCursor.execute(sqlCommand)
