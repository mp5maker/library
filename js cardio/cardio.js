// Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse String [split, reverse, join]");
console.log(reverseString('photon'));

function reverseStringTwo(str) {
    let reverseString = '';
    for(let i = 0; i < str.length; i++) {
        reverseString = str[i] + reverseString;
    }
    return reverseString;
}
console.log("Reverse String using For Loop");
console.log(reverseStringTwo('photon'));

function reverseStringThree(str) {
    let revString = '';
    for(let index in str) {
        revString = str[index] + revString;
    }
    return revString   
}
console.log("Reverse String using ES6 Syntax");
console.log(reverseStringThree('photon'));

function reverseStringFour(str) {
    let revString = '';
    str.split('').forEach(char => revString = char + revString);
    return revString;
}
console.log("Reverse String using ES6 Syntax && forEach");
console.log(reverseStringFour('photon'));

function reverseStringFive(str) {
    return str.split('').reduce((previousString, currentString) => (currentString + previousString), '');
}
console.log("Reverse String using ES6 Syntax && Reduce");
console.log(reverseStringFive('photon'));

// Palindrome
function isPalindrome(str) {
    reverseString = str.split('').reverse().join('');
    if(reverseString == str) {
        return true;
    }
    return false;
}
console.log("Check Palindrome: Reverse String == String");
console.log(isPalindrome('racecar'));
console.log(isPalindrome('madam'));

// Reverse Int
function reverseInt(number) {
    if(number.toString()[0] == '-') {
        number = number.toString().replace('-', '');
        return parseInt("-" + number.split('').reverse().join('')); 
    }
    return parseInt(number.toString().split('').reverse().join(''));
}
console.log("Reverse Int");
console.log(reverseInt(-12345));

// Capitalize Letters