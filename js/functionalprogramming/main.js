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
const addition = (numOne, numTwo) => console.log(numOne + numTwo);
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

const vacation = new Vacation('Mayu', 7)
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

let expendition = new Expendition('Himalayas', '8912', 'claw')
expendition.print()

// React Js Style
import { helloWorld } from './importTypes/importStyleThree'
import World from './importTypes/importStyleTwo'
import hello from './importTypes/importStyleOne'
helloWorld()
World()
hello()


// Common JS
const { testOne, testTwo } = require('./importTypes/importStyleFour') 
testOne()
testTwo()

// Immutability
const colorLawn = {
    title: "lawn",
    color: ["#00FF00"],
    rating: 0
}

// Immutablily [Object Assign]
function rateColor(colorLawn, rating) {
    return Object.assign({}, colorLawn, {rating: rating})
}

console.log(rateColor(colorLawn, 5))
console.log(colorLawn)

// Immutablily using the es6 syntax [Spread Operator | Object]
let rateColorTwo = (colorLawn, rating) => {
    return ({
        ...colorLawn,
        rating
    })
}

console.log(rateColorTwo(colorLawn, 2))
console.log(colorLawn)

// Immutability [X] Array Push [OK] Arrat Concat [Ok] Spread Operator
let addColors = (colorLawn, color) => {
    return ({ ...colorLawn, color: [...colorLawn.color, color]})
}

let addColorsTwo = (colorLawn, color) => {
    return Object.assign({}, colorLawn, {color: colorLawn.color.concat(color)}) 
}

console.log(addColors(colorLawn, "#f#f#f"));
console.log(addColorsTwo(colorLawn, "#f#f#f"));

// Pure Functions
const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false,
}

const selfEducation = (person) => {
    return ({
        ...person,
        canRead: true,
        canWrite: true
    })
}

console.log(selfEducation(frederick))

// Array Filter
const schools = [
    "Yorktown",
    "Washington & Lee",
    "Wakefield"
]
const WSchools = schools.filter((school) => school[0] == "W")
console.log(WSchools)

// Array Mep
const newSchools = schools.map((school) => `${school} High School`)
console.log(newSchools)


// Object Changing using Map
const buyers = [
    {name: "Enamul", cash: "17"},
    {name: "Samith", cash: "10"},
    {name: "Erfan", cash: "20"},
    {name: "Udoy", cash: "25"},
]
console.log(buyers.map((buyer) => (buyer.name == "Enamul") ? ({...buyer, name: "Mashrafy"}) : buyer ))

// Transforming an object into an array [Using Object.keys]
const points = {
    "Gryfindor": 8,
    "Scarlet": 5,
    "Wick": 10
}

const pointTransform = Object.keys(points).map((key) => {
    return ({
        name: key,
        points: points[key]
    })
})
console.log(pointTransform)

// Transforming an object using [Reduce && Reduce Right]
const ages = [21, 18, 52, 40, 64, 63, 34]
const maxAge = ages.reduce((current, age) => ((current > age) ? current : age), 0) 
const maxAgeTwo = ages.reduceRight((current, age) => ((current > age) ? current : age), 0) 
console.log(maxAge)
console.log(maxAgeTwo)

// Transforming an array into an object [Reduce && Reduce Right]
const manyColors = [
    {
        id: 1,
        slug: "firebrick",
        title: "firebrick", 
        rating: 5,
    },
    {
        id: 2,
        slug: "sand",
        title: "sand",
        rating: 3,
    },
    {
        id: 3,
        slug: "paleblue",
        title: "paleblue",
        rating: 2
    },
]

const manyColorsObject = manyColors.reduce((create, {id, slug, title, rating}) => {
    create[slug] = { id, title, rating }
    return create 
}, {})
console.log(manyColorsObject)

const differentColors = ['red', 'blue', 'red', 'green']
const distinctColors = differentColors.reduce((distinct, color) => (distinct.indexOf(color) > -1 ? distinct : [...distinct, color]), [])
console.log(distinctColors)

// Higher Order Function
const invokeIf = (condition, fnTrue, fnFalse) => condition ? fnTrue : fnFalse;
const fnTrue = () => "True"
const fnFalse = () => "False"
console.log(invokeIf(true, fnTrue, fnFalse))

// Recursion
const countdown = (value, fn) => {
    fn(value)
    return (value > 0) ? countdown(value - 1, fn) : value
}

countdown(10, console.log)

let dan = {
    type: "person",
    data: {
        gender: "male",
        info: {
            id: 25,
            fullname: {
                first: "Dan",
                last: "Daecon"
            }
        }
    }
}

const deepPick = (obj) => {
    let objProps = typeof (obj) == "object" ? Object.keys(obj) : Object.keys(obj[0])
    
    const inner = (obj) => {
        Object.keys(obj).forEach((perProps) => {
            if (typeof(obj[perProps]) == 'object') {
                objProps = [...objProps, { [perProps] : Object.keys(obj[perProps]) }]
                inner(perProps)
            }
        })
    }

    inner(obj)
    return objProps
    
}
console.log(deepPick(dan))

//////////////////////////// React ////////////////////////////////////////
ReactDOM.render(
    React.createElement('h1', {className: 'ingredients'}, 'Baked Salmon'),
    document.getElementById('root'),
)


// Use React Factory
const IngredientList = ({ list}) => {
    return React.createElement('ul', null, 
        list.map((item, key) => React.createElement('li', {key: key}, item))
    )
}

const Ingredients = React.createFactory(IngredientList)

const list = [
    '1 lb salmon',
    '1 cup Pine Nuts',
    '2 cups Butter Lettuce',
    '1 Yellow Squash',
    '1/2 cup Olive Oil',
    '3 cloves of Garlic'
]

ReactDOM.render(
    Ingredients({list}),
    document.getElementById('factory')
)