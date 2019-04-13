import mysql.connector

dbSettings = {
    "host": "localhost",
    "user": "root",
    "passwd": "",
    "db": "py_mysql"
}

pyDb = mysql.connector.connect(
    host=dbSettings['host'],
    user=dbSettings['user'],
    passwd=dbSettings['passwd'],
    db="py_mysql"
)

pyCursor = pyDb.cursor()