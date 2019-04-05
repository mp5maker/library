import re

text = "Hello, World!"

""" Search (If it starts with Hello and ends with World!) | or returns None"""
x = re.search("^Hello.*World!$", text)
print(x)
# Contains three properties .span(), .string, .group()
print(x.span()) # Returns the start and end position
print(x.string) # Returns the string that has been passed
print(x.group()) # Returns the part of the string where there was a match

if x:
    print('We have a match')

""" Find All [Returns a list]"""
y = re.findall('l', text)
print(y)

""" Returns the first occurance """
split = re.split(' ', text, 1)
print(split)

""" Sub """
sub = re.sub(',', ':', text)
print(sub)

