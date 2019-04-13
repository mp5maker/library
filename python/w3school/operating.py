import os

path = 'files/demofilestwo.txt'
if os.path.exists(path):
    os.remove(path)
else:
    print('file doesn\'t exist')

if os.path.exists('dummy'):
    os.rmdir('dummy`')
else:
    print('file doesn\'t exist')

