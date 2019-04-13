my_name = 'Ryu'

print(my_name)

def print_name():
    my_name = "Crystal"
    print(f'Name is {my_name}')

print_name()
print(my_name)

def print_name_again():
    global my_name 
    my_name = "yoshi"
    print(f'Name is {my_name}')

print_name_again()
print(my_name)