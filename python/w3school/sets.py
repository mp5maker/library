# 3. A set is a collection which is unordered and unindexed
fruits = {"apple", "banana", "cherry"}
print(fruits)

""" Loop """
for fruit in fruits:
    print(fruit)

""" Check if Exist """
if 'banana' in fruits:
    print("Banana")

""" Add """
fruits.add('orange')
print(fruits)

""" Update [Add More Item to a Set] """
fruits.update(['mango', 'grapes'])
print(fruits)

""" Length """
print(len(fruits))

""" Remove (Raises Error if the item do not exist) """
fruits.remove("banana")
print(fruits)

""" Discard (Similar to Remove but do not raise any error) """
fruits.discard("cherry")
print(fruits)

""" Pop [Not Sure which item will remove better not to use it] """
fruits.pop()
print(fruits)

""" Clear """
fruits.clear()
print(fruits)