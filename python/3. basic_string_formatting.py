## Basic String Formatting
num1 = 3.142567389
num2 = 10.29012347

## First Format
print('num1 is', num1, 'num2 is', num2)

## Second Format
print("num1 is {0:.3} num2 is {1:.3}".format(num1, num2))
print("num1 is {0:.3f} num2 is {1:.2f}".format(num1, num2))

## Third Format
print(f"num1 is {num1:.3f} num2 is {num2:.3f}")