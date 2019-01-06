## If Statement

employee = [
    {"name": "mary", "age": 25},
    {"name": "john", "age": 18},
    {"name": "smith", "age": 32},
    {"name": "mark", "age": 40},
]

if employee[0]['name'] == 'mary':
    print(employee[0]['age'])
elif employee[1]['name'] == 'john':
    print(employee[1]['age'])
else:
    print(employee[2]['age'])
