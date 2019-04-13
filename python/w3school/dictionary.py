# 4. Dictionary: A dictionary is a collection which is unordered, changeable and indexed.
# In Python dictionaries are written with curly brackets, and they have keys and values.

car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

print(car)

""" Accessing the value of the dictionary  """
print(car['brand'])

""" Accessing the value of the dictionary using get method """
print(car.get('year'))

""" Updating the key value in the dictionary """
car['year'] = 1965
print(car)

""" Print all the keys in the dictionary one by one """
for prop in car:
    print(prop)

""" Print all the values of the dictionary one by one """
for prop in car:
    print(car[prop])

""" Using the values methods to access only the values """
for val in car.values():
    print(val)

""" Using the items methods """
for x,y in car.items():
    print(x, ":", y)

""" Check if key exist in  a dictionary """
if "brand" in car:
    print("Brand is there!")

""" Length of the dictionary """
print(len(car))

""" Add Properties in an dictionary """
car["color"] = "red"
print(car)

""" Pop removes the item with the key name """
car.pop('color')
print(car)

""" Pop item removes random key from an object [Do not use it] """
newCar = car.copy()
newCar.popitem()
print(newCar)

""" Del also deletes the property from the dictionary """
del newCar['year']
print(newCar)

""" Clears the the object """
car.clear()
print(car)

""" dict """
newCarTwo = dict(newCar)
print(newCarTwo)
