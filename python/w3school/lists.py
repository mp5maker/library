# There are four types of list in python

# 1. List is a collection which is ordered and changeable. It allows duplicae members
fruits = ['apple', 'banana', 'cherry']
print(fruits)
print(fruits[2])
fruits[2] = 'orange'
print(fruits)
print(fruits[0:2])

""" Loop Through List """
for fruit in fruits:
    print(fruit)

""" In Array """
if "banana" in fruits:
    print('banana')

""" Length """
print(len(fruits))

""" Append """
fruits.append('watermelon')
print(fruits)

""" Insert """
fruits.insert(1, 'pears')
print(fruits)

""" Remove """
fruits.remove('pears')
print(fruits)

""" Pop """
fruits.pop()
print(fruits)

""" Copy """
fruits_copy = fruits[:]
print(fruits_copy)

""" Alternative way to copy """
fruits_list_copy = list(fruits_copy)
print(fruits_list_copy)

""" Dek """
del fruits[0]
print(fruits)
