from config.db import pyCursor

sqlCommand = " \
            SELECT users.name AS user, \
                products.name AS fav \
                FROM users \
                RIGHT JOIN products \
                ON users.fav = products.id \
            "
pyCursor.execute(sqlCommand)
results = pyCursor.fetchall()
for user in results:
    print(user)
