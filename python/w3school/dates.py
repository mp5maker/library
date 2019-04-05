# Python Dates
import datetime

x = datetime.datetime.now()
print(x)

""" Formatting the time """
print(x.year)
print(x.strftime("%A"))

""" Create Time """
y = datetime.datetime(2020, 5, 17)
print(y)
