# Excluding 5
for n in range(5):
    print(n)

print('\n')

# Including 3, Excluding 10
for n in range(3, 10):
    print(n)

print('\n')

# Including 3, Excluding 10, Step Size
for n in range(3, 10, 3):
    print(n)

print('\n')

# Printing out array
burgers = ['beef', 'chicken', 'vegetable', 'supreme', 'double']
for n in range(len(burgers)):
    print(n, burgers[n])

print('\n')

# Reverse printing out array
for n in range(len(burgers) - 1, -1, -1):
    print(n, burgers[n])