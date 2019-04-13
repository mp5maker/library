# 2. A tuple is a collection which is ordered and unchangeabled

""" Unchangeable """
fruits_tuple = ("banana", "cherry", "apple")
print(fruits_tuple)
print(fruits_tuple[2])

""" Check if item exist """
if "apple" in fruits_tuple:
    print("Apple")

""" Loop """
for fruit in fruits_tuple:
    print(fruit)

""" Length """
print(len(fruits_tuple))
