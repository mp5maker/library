# A Lamba function is like a closure, it is a small function

def addTen(a):
    return a + 10
print addTen(20)

# Power of the lambda funciton
x = lambda a : a + 10
print x(20)

""" Multiple Parameters Lambda Function """
x = lambda a,b,c : a + b + c
print x(5, 5, 5)