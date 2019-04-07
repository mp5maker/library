from config.db import pyCursor

sqlCommand = 'DROP TABLE testing'
pyCursor.execute(sqlCommand)