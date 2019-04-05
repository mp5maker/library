class MyClass:
    x = 5

p1 = MyClass()
print(p1.x)

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def details(self):
        return "My name is " + self.name + ", my age is " + str(self.age)

p2 = Person("Photon", 27)
print(p2.details())

""" Modify the age """
p2.age = 30
print(p2.details())

""" Delete the age """
del p2.age
print(p2.details())

