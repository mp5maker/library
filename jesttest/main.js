const axios = require('axios');

const main = {
    add: (num1, num2) => (num1 + num2),
    isNull: () => (null),
    isUndefined: () => (undefined),
    checkValue: (x) => x,
    createUser: () => {
        const user = {
            firstName: "Shabuktagin"
        };
        user['lastName'] = "Khan";
        return user;
    },
    fetchUser: () => axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(err => console.log(err)),
    stringReverse: (string) => string.split('').reverse().join(''),
}

module.exports = main;