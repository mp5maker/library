from config.db import pyDb

pyCursor = pyDb.cursor()

prepareStatement = "INSERT INTO customers(name, address) VALUES(%s, %s)"
prepareValues = [
    ('Peter', 'Lowstreet 4'),
    ('Amy', 'Apple st 652'),
    ('Hannah', 'Mountain 21'),
    ('Michael', 'Valley 345'),
    ('Sandy', 'Ocean blvd 2'),
    ('Betty', 'Green Grass 1'),
    ('Richard', 'Sky st 331'),
    ('Susan', 'One way 98'),
    ('Vicky', 'Yellow Garden 2'),
    ('Ben', 'Park Lane 38'),
    ('William', 'Central st 954'),
    ('Chuck', 'Main Road 989'),
    ('Viola', 'Sideway 1633')
]
pyCursor.executemany(prepareStatement, prepareValues)

pyDb.commit()
print(pyCursor.rowcount, 'was inserted')

prepareStatement = "INSERT INTO users(name, fav) VALUES(%s, %s)"
prepareValues = [
    ('John', 1),
    ('Peter', 2),
    ('Amy', 3),
    ('Hannah', 3 ),
    ('Michael', 3 )
]
pyCursor.executemany(prepareStatement, prepareValues)

pyDb.commit()
print(pyCursor.rowcount, 'was inserted')


prepareStatement = "INSERT INTO products(id, name) VALUES(%s, %s)"
prepareValues = [
    (1, 'Chocolate Heaven'),
    (2, 'Tasty Lemons'),
    (3, 'Vanilla Dreams')
]
pyCursor.executemany(prepareStatement, prepareValues)

pyDb.commit()
print(pyCursor.rowcount, 'was inserted')


