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
    }
}

module.exports = main;