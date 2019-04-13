# While Loop

print('break')
i = 0
while i < 3:
    print(i)
    if i == 1:
        break
    i += 1

print('continue')
j = 0
while j < 5:
    j += 1
    if j == 2:
        continue
    print(j)


