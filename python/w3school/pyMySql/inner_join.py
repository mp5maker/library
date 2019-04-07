from config.db import pyCursor

sqlCommand = "SELECT u.name AS user, products.name AS fav FROM users AS u AS INNER JOIN ON users.fav == products.id"
pyCursor.execute(sqlCommand)
results = pyCursor.fetchall()
for user in results:
    print(user)