
with open('files/write.txt', 'w') as write_file:
    write_file.write('Damn Son')
    write_file.write('\nDamn Son')

quotes = [
    '\nDamn Son',
    '\nDamn Son',
    '\nDamn Son',
]

with open('files/write.txt', 'w') as write_file:
    write_file.writelines(quotes)