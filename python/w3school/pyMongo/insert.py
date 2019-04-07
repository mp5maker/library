from config.db import pyCustomerCollection

customer = {
    'name': 'John',
    'address': 'Highway 37'
}
insertedCustomer = pyCustomerCollection.insert_one(customer)