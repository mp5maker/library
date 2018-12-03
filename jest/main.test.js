const main = require('./main');

// toBe, toBeNull, toBeUndefined
test('Checking the test', function(){
    expect(main.add(2,2)).toBe(4);
    expect(main.isNull()).toBeNull();
    expect(main.isUndefined()).toBeUndefined();
});

// toBeFalse
test('Should be falsy', () => {
    expect(main.checkValue(0)).toBeFalsy()
})

// User should be Shabuktagin Khan Object
test('User should be Shabuktagin Khan', () => {
    expect(main.createUser()).toEqual({
        firstName: "Shabuktagin",
        lastName: "Khan"
    });
});

// Greater Than or Less than
test("Should be under 16", () => {
    let num1 = 10;
    let num2 = 3;
    expect(num1 + num2).toBeLessThanOrEqual(16);
});

// Regular Expression
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['admin', 'hello', 'nyo'];
    expect(usernames).toContain('admin');
});

// Working with Asynchronous data
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return main.fetchUser()
            .then(data => {
                expect(data.name).toEqual('Leanne Graham')
            })
});

// Function exists or not
test('Reverse string reverse function exists or not', () => {
    expect(main.stringReverse).toBeDefined();
})

test('Testing Reverse String works or not', () => {
    expect(main.stringReverse('hello')).toEqual('olleh');
});