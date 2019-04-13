def greet():
    print ('hello world')

greet()

#########################################

def welcome(name="John Doe", time="Evening"):
    print (f'Good {time} {name}, hope you are well')

welcome('Photon', 'Morning')
welcome()

#########################################

name = input("Please enter your name: ")
time = input("Current Time: ")
welcome(name, time)

#########################################

def random():
    return "Random Dude"

def walking_in_the_park(innerFunc):
    print(f'{innerFunc()} walking in the park')

walking_in_the_park(random)