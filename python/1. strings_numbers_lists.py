## Everything in python is considered as a object

# Numbers [Integers, Floats]
type(5) # => Int Class
type(3.142) # => Float Class
5 + 5  # => 10 
5 - 5 # => 0
5 * 5 # => 25
5 / 5 # => 1.0 [Float]
5 // 5 # => 1 [Int]
5 ** 5 # => 3125 [5^5]
10 % 3 # => 1 [Modulo]
5 + 5 * 3 # => BIDMAS [Brackets, Indices(Power), Division, Multiply, Addition, Subtration]
age = 5
age += 5
age -= 5
age /= 5


# Strings
"hello"
'hello'
"he's a mad man"
'he\'s a mad man'
greet = 'hello'
greet[0] # Forwards
greet[-1] # Backwards
greet[0:3] # 0, 1, 2 => hel
greet[2:-1] # ll

dudes = "dudes"
greet + " " + dudes # Hello Dudes
greet * 2 # hellohello
greet.upper() # HELLO

cheeses = "brie, chedder, stilton"
cheeses.split(',') # ["brie", "chedder", "stilton"]
len(greet) # 5

# Lists
str = "Hello there dudes"
str.split(' ')
fibinacci_sequence = [1, 1, 2, 3, 5, 8, 13]
fibinacci_sequence[2] # 2
fibinacci_sequence[0:2] # 1, 1
fibinacci_sequence_2 = [21, 34, 55]
fibinacci_sequence + fibinacci_sequence_2  # [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
fibinacci_sequence.append(89)  # [1, 1, 2, 3, 5, 8, 89]
fibinacci_sequence.pop  # [1, 1, 2, 3, 5, 8]
fibinacci_sequence.remove(1)  # [1, 2, 3, 5, 8] { Removes only one of the ones }
del(fibinacci_sequence[3]) # [1, 2, 3, 8]