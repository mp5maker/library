
let target = {};

let proxy = new Proxy(target, {});
proxy.test = 5;

console.log(target.test)
for(let key in proxy) console.log(key);

let dictionary = {
    "name": "Shabuktagin Photon Khan",
    "age": 27
}

dictionaryProxy = new Proxy(dictionary, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return prop;
        }
    }
})

console.log(dictionaryProxy['hello'])
console.log(dictionaryProxy['damn son'])

let numbers = [];
numbers = new Proxy(numbers, {
    set(target, prop, val) {
        if (typeof val == 'number') {
            target[prop] = val;
            return true;
        } else {
            return false;
        }
    }
});

numbers.push(1);
numbers.push(3);
// numbers.push("test");
console.log(numbers)

let user = {
    name: "John",
    password: "Doe"
}

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('Access Denied');
        }
        if (prop in target) {
            let value = target[prop];
            return (typeof value == 'function') ? value.bind(target) : value;
        } else {
            return prop;
        }
    },
    set(target, prop, value) {
        if (props.startsWith('_')) {
            throw new Error('Access Denied')
        } else {
            target[prop] = value;
        }
    },
    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error('Access Denied')
        }
        if (prop in target) {
            delete target[prop]
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
})

console.log(user['name'])


/* USE CASE: You want to detect how many times you called an api */
/* Manipulate: Object */
let bears = { grizzly: true }
let grizzlyCount = 0
const proxyBears = new Proxy(bears, {
    get: function(target, prop) {
        if (prop in target) {
            grizzlyCount++;
            return target[prop]
        }
        else throw new Error('Access Denied')
    },
    set: function(target, prop, value) {
        if (['grizzly', 'brown', 'polar'].indexOf(prop) == -1) {
            throw new Error('It is not a bear!')
        }
        target[prop] = value
    },
    deleteProperty: function(target, prop) {
        delete target[prop]
    }
})

proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
console.log(grizzlyCount)


/* Manipulating Function */
function growl() {
    return 'grrrr'
}
const loudGrowl = new Proxy(growl, {
    apply: function(target, thisArg, args) {
        return target().toUpperCase() + `!!!`
    }
})
console.log(loudGrowl())


/* Manipulate Array */
const indexedArray = new Proxy(Array, {
    construct: function (target, [originalArray]) {
        const index = {}
        originalArray.forEach(function(item) {
            index[item.id] = item
        })

        const newArray = new target(...originalArray)

        return new Proxy(newArray, {
            get: function(target, prop) {
                if (prop == 'push') {
                    return function(item) {
                        index[item.id] = item
                        return target[prop].call(target, item)
                    }
                }
                if (prop == 'findById') {
                    return function(searchById) {
                        return index[searchById]
                    }
                }
            }
        })
    }
})

let newBears = new indexedArray([
    {
        id: 2,
        name: `grizzly`
    },
    {
        id: 4,
        name: `black`,
    },
    {
        id: 3,
        name: `polar`
    }
])

console.log(newBears.findById(2))