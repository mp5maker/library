""" We can use else with try catch """
try:
    print(x)
except NameError:
    print("Variable x is not defined")
except:
    print("Something is wrong")
else:
    print("Nothing went wrong")


try:
    print(x)
except NameError:
    print("Variable x is not defined")
finally:
    print("Finished")
