####################### Filter ########################
grades = ['A', 'B', 'C', 'D', 'E', 'F']

def remove_fails(grade):
    return grade != 'F' 

print('Filter Method')
print(list(filter(remove_fails, grades)))
print('\n')

####################### Loop ##########################
filtered_grades = []
for grade in grades:
    if grade != 'F':
        filtered_grades.append(grade)
print('Loop Method')
print(filtered_grades)
print('\n')

#################### Comprehension ####################
print('Comprehension Method')
print([grade for grade in grades if grade != 'F'])
print('\n')