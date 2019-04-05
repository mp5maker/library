class Person:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)
x = Person("John", "Doe")
x.printname()


""" Pass means, no properties or methods are added to this class """
class Student(Person):
    pass
y = Student("John", "Doe")
y.printname()

class AnotherStudent(Person):
    def __init__(self, firstName, lastName, year):
        Person.__init__(self, firstName, lastName)
        self.graduationYear = year
z = AnotherStudent("John", "Doe", "2019")
print(z.graduationYear)
