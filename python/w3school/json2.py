
import simplejson as json

""" Json Loads """
x = '{"name":"John", "age":30, "city":"New York"}'
y = json.loads(x)
print(y['age'])

""" Json Dumps """
x = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
y = json.dumps(x)
print(y)

""" Json Dumps with Modification """
z = {
    "name": "John",
    "age": 30,
    "married": True,
    "divorced": False,
    "children": ("Ann", "Billy"),
    "pets": None,
    "cars": [
        {"model": "BMW 230", "mpg": 27.5},
        {"model": "Ford Edge", "mpg": 24.1}
    ]
}
print(json.dumps(z, indent=4, separators=(". ", "=")))

""" Sorting the json dump """
print(json.dumps(z, indent=4, sort_keys=True))
