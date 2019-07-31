function multiply(x) {
    return function(y) {
        return x * y;
    }
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo);
console.log(multiplyByTwo(4))
console.log(multiply(2)(4))

