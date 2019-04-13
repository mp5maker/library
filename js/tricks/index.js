// Clearing or truncating an array
const arr = [11, 22, 33, 44, 55, 66];
arr.length = 3;
console.log(arr)

// Object Destructuring for array items
const csvFileLine = '1997,John Doe,US,john@doe.com,New York';
console.log(csvFileLine.split(','))
const { 2: country, 4: state } = csvFileLine.split(',');
console.log(country)
console.log(state)

// Simulating named parameters with object destructuring
const sayGreetings = ({ when = "Night", greeting = "Good", others } = {}) => {
    if (others) {
        return `${greeting} ${when} ${others}`
    }
    return `${greeting} ${when}`
}
console.log(sayGreetings({when: "Morning", greeting: "Good"}))
console.log(sayGreetings({when: "Morning", greeting: "Good", "others": "My Son"}))

// Switch with Ranges
const getWaterState = (tempInC) => {
    switch(parseInt(tempInC)) {
        case (tempInC <= 0):
            return 'Solid'
        case (tempInC > 0 && tempInC < 100):
            return 'Liquid'
        default:
            return 'Gas'
    }
}
console.log(getWaterState(0))

// Creating Pure Objects
const pureObject = Object.create(null)
console.log(pureObject)

// Formatting JSON Code
const obj = {
    foo: { bar: [11, 22, 33, 44], baz: { bing: true, boom: 'Hello' } }
};
console.log(JSON.stringify(obj, null, 4))

// Remove Duplicate items for an array
const duplicateArray = [42, 'foo', 42, 'foo', true, true]
const removeDuplicateArray = (duplicateArray) => [...new Set(duplicateArray)]
console.log(removeDuplicateArray(duplicateArray))