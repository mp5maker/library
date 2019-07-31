function multiply(x) {
    return function(y) {
        return x * y;
    }
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo);
console.log(multiplyByTwo(4))
console.log(multiply(2)(4))

const multipleSecondWay = (x) => (y) => x * y;
console.log(multipleSecondWay(2)(4))


function multiplyWithAddtion(x) {
    let z = x + 2;
    return function(y) {
        return (x * y) + z;
    }
}

// (3 * 2) + (3 + 2) = 6 + 5 = 11
console.log(multiplyWithAddtion(3)(2))