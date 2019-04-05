# File Handler

# File Read
""" Reads the whole document """
print('fread')
try:
    f = open('files/demofiles.txt', 'r') # Read
    print(f.read())
except NameError:
    print("Something went wrong")
finally:
    f.close()
print('')

""" Specifiy the characters """
print('fread(5)')
try:
    f = open('files/demofiles.txt', 'r')
    print(f.read(5))
except NameError:
    print("Something went wrong")
finally:
    f.close()

""" Reads per line """
try:
    f = open('files/demofiles.txt', 'r')
    for each_line in f:
        print(each_line)
except NameError:
    print("Something went wrong")
finally:
    f.close()

""" Reads per line """
try:
    f = open('files/demofiles.txt', 'r')
    print(f.readline())
except NameError:
    print("Something went wrong")
finally:
    f.close()

# File Write
""" Appends """
try:
    f = open('files/demofiles.txt', 'a') # Append
    print(f.write("Dang son!"))
except NameError:
    print("Something went wrong")
finally:
    f.close()

""" Overrides """
try:
    f = open('files/demofiles.txt', 'w') # Overrides
    print(f.write("Dang son!"))
except NameError:
    print("Something went wrong")
finally:
    f.close()

# File Create
try:
    f = open('files/demofilestwo.txt', 'w')
except NameError:
    print("Something went wrong")
finally:
    f.close()
