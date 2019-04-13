""" Comprehension """
fruits = ['banana', 'apple', 'orange']
appendItem = [fruit+" item" for fruit in fruits]
print(appendItem)

conditionItem = [fruit+" item" for fruit in fruits if fruit == 'apple']
print(conditionItem)