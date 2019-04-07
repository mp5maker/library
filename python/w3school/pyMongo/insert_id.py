from config.db import pyCustomerCollection

customer = {
    'name': 'Peter',
    'address': 'Lowstreet 4',
}
last_insert = pyCustomerCollection.insert_one(customer)
print(last_insert.inserted_id)
