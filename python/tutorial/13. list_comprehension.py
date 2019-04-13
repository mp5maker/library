######################## Double Prizes Array ##################################
prizes = [5, 10, 50, 100, 1000]

# For Loop Method
dbl_prizes = []
for prize in prizes:
    dbl_prizes.append(2*prize)

print("Loop Method")
print(dbl_prizes)
print("\n")

# Comprehension method
dbl_prizes = [2*prize for prize in prizes]
print("Comprehension Method")
print(dbl_prizes)
print("\n")

######################## Squaring Numbers ######################################
nums = [1,2,3,4,5,6,7,8,9]

# For Loop Method
squared_even_nums = []
for num in nums:
    if num**2 % 2 == 0:
        squared_even_nums.append(num**2)
print("Loop Method")
print(squared_even_nums)
print("\n")

# Comprehension Method
squared_even_nums = [num**2 for num in nums if(num**2 % 2) == 0]
print("Comprehension Method")
print(squared_even_nums)
print("\n")
