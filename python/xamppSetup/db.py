import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    db="attendance"
)

mycursor = mydb.cursor()
mycursor.execute("SELECT * FROM testing")
myresult = mycursor.fetchall()

for x in myresult:
    print(x)
