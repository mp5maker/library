#################### For Loop Method ####################
from random import shuffle

def jumble(word):
    anagram = list(word)
    shuffle(anagram)
    return "".join(anagram)

words = ['beetroot', 'carrots', 'potatoes']
anagrams = []

for word in words:
    anagrams.append(jumble(word))

print('Loop Method')
print(anagrams)
print('\n')

#################### Map ##################################
print('Map Method')
print(list(map(jumble, words)))
print('\n')

############## Comprehension Method #######################
print('Comprehension Method')
print([jumble(word) for word in words])
print('\n')
