ninja_belts = {"crystal": "red", "ryu": "black"}
print(ninja_belts)

# Print out the properties
print('\n')
print(ninja_belts['ryu'])

# Check in object/dictionary
print('\n')
print('yoshi' in ninja_belts)

# Print out all the properties/key
print('\n')
print(list(ninja_belts.keys()))

# Printing out all the values
print('\n')
belts = list(ninja_belts.values())
print(belts)
print('\n')
print(belts.count('red'))
print('\n')

# Alternative way to describe dictionary
person = dict(name="Photon Khan", age=27)
print(person)
print('\n')

## Printing out keys and values
for person, belt in ninja_belts.items():
    print(person, belt)
print('\n')
