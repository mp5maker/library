# Generators

def foo():
    yield 1
    yield 2
    yield 3

f = foo()
print(f.next())
print(f.next())
print(f.next())