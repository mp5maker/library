// Const [Once declared cannot be changed]
const fruits = ['apple', 'banana', 'oranges']
console.log(fruits)

// Let [Can be found only in the lexical scope]
let num = 5
if (num < 10) {
    let num = 10;
    console.log(`Inside the if statement: ${num}`)
} 
console.log(`Outside the if statement: ${num}`)

// Compared to Var [Globally available can be changed in lexical scope]
var numtwo = 7;
if (num < 10) {
    let numtwo = 11;
    console.log(`Inside the if statement: ${numtwo}`)
}
console.log(`Outside the if statement: ${numtwo}`)

// Scope of [i] is protected within loop
let i = 10;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

// Taking default values for javascript
let defaultPerson = {
    name: {
        first: "Shane",
        last: "McConkey",
    },
    favActivity: "skiing"
}

function logActivity(p=defaultPerson) {
    console.log(`${p.name.first} loves ${p.favActivity}`);
}

logActivity();

// Arrow Function
addition = (numOne, numTwo) => console.log(numOne + numTwo);
addition(3,5)

// Arrow Function and [this] // It works differently in arrow function
var tahoes = {
    resorts: ["Kirkwood", "Squaw", "Alpine", "Heavenly", "Northstar"],
    print: function(delay=1000) {
        setTimeout(() => {
            console.log(this.resorts.join(","))
        }, delay)
    }
}

tahoes.print()

// Destructuring Assignment [Objects]
var sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}

var { bread, meat } = sandwich;
console.log(bread)
console.log(meat)

var tastesBetter = ({bread, meat}) => {
    console.log(`I like to have ${meat} with ${bread}`)
}
tastesBetter(sandwich)

// Destructuring Assignment [Arrays]
var [firstResort] = ["Kirwood", "Squaw", "Alpine"];
console.log(firstResort);

// Destructuring
var [,,thirdResort] = ["Kirword", "Squaw", "Alpine"];
console.log(thirdResort);

// Object Literal Enhancement
var name = "Tallac";
var elevation = 9738;
var print = function() {
    return `${this.name} is ${this.elevation} feet tall.`;
}
var funHike = { name, elevation, print };
console.log(funHike)
console.log(funHike.print())

// Object Literal Enhancement [New way to write functions]

var employeeTwo = {
    name: "Photon Khan",
    age: 27,
    print(){
        return `${this.name} is ${this.age}-years-old`
    }
}
console.log(employeeTwo.print())

// The Spread Operator [With Arrays]
var peaks = ['Tallac', 'Ralston', 'Rose'];
var canyons = ['Wards', "Blackword"]
var tahoe = [...peaks, ...canyons];
var [first, ...rest] = [...peaks, ...canyons];

console.log(tahoe)
console.log(first)
console.log(rest)

function checkTahoe(...args) {
    console.log(args)
}
checkTahoe(...peaks, ...canyons)

// The Spread Operator with [With Objects]
var person = {
    age: "27",
    salary: "25000"
}


var salesman = {
    ...person,
    name: "Shabuktagin Photon Khan"
}

console.log(salesman)


// Promises
const readText = () => new Promise((resolve, reject) => {
    const url = 'some.txt';
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.send()
    request.onload = () => {
        if (request.status == 200) {
            resolve(request.response)
        } else {
            reject("Something seems to be wrong")
        }
    }
}) 

readText().then(response => console.log(response)).catch(error => error)

// Classes [Text Capitalize Convention]
class Vacation {

    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}

vacation = new Vacation('Mayu', 7)
vacation.print()

// Expendition [ Vacaction ]
class Expendition extends Vacation {
    
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear;
    }

    print() {
        super.print()
        console.log(`Bring your ${this.gear}`)
    }
}

// React Js Style
import { HelloWorld } from './importTypes/importStyleThree'
import World from './importTypes/importStyleTwo'
import Hello from './importTypes/importStyleOne'

// Common JS
// const { testOne, testTwo } = require('./importTypes/importStyleFour') 