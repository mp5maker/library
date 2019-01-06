# Loops
names = ['Ryu', 'Yoshi', 'Crystal', 'Ken']

# For Loop
for name in names:
    print(name)

print('\n')

# Limiting for Loop
for name in names[0:3]:
    print(name)

print('\n')

# Limiting for Loop
for name in names[0:3]:
    if name == 'Crystal':
        print(name)
        break

print('\n')

# While Loop
age = 25
num = 0

while num < 25:
    print (num)
    if num == 20:
        break
    num += 5 