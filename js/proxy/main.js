
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