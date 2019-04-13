configs = ['cache', 'development']

""" Map """
newConfig = map((lambda config: config+"Mode") , configs)
print(newConfig)

""" Reduce """
def reduceHelper(newDict, perItem):
    newDict[perItem] = False
    return newDict

newConfigDict = reduce(reduceHelper, configs, {})
print(newConfigDict)

""" Filter """
def filterHelper(perItem):
    if perItem == 'cache':
        return perItem

newConfigFilter = filter(filterHelper, configs)
print(newConfigFilter)