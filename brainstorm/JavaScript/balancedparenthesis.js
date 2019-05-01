const expressions = {
    parenthesis: {
        open: "(",
        close: ")"
    },
    bracket: {
        open: "[",
        close: "]"
    },
    squiggles: {
        open: "{",
        close: "}"
    }
}

const openList = Object.keys(expressions).reduce((newArray, option) => {
    return [...newArray, expressions[option].open]
}, [])

const closeList = Object.keys(expressions).reduce((newArray, option) => {
    return [...newArray, expressions[option].close]
}, [])

const test = "{}[(){])}[}(}{}]([}";
const testTwo = "[]{}()";

const isBalanced = (str) => {
    let stack = [];
    str.split('').forEach((ch) => {
        character = String(ch);
        if(openList.includes(character)) {
            stack.push(character)
        }
        if(closeList.includes(character)) {
            const closingIndex = closeList.findIndex((findch) => findch === character);
            const openingValue = openList[closingIndex];
            const stackIndex = stack.findIndex((findch) => findch == openingValue);
            stack.splice(stackIndex, 1);
        }
    })
    return stack.length > 0 ? false: true;
}

console.log(isBalanced(test))
console.log(isBalanced(testTwo))