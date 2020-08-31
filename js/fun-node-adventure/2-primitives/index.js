/* Primitives */
var a = 5
var b = a
b = 6
console.log(a)
console.log(b)
const hasWindow = typeof window !== 'undefined'

/* Complex */
var a = ['hello', 'world']
var b = a
b[0] = 'bye'
console.log(a[0])
console.log(b[0])

/* Type Hiccups */
var a = 'woot'
var b = new String('woot')
console.log(a + b)
console.log(typeof a)
console.log(typeof b)
console.log(a instanceof String)
console.log(b instanceof String)
console.log(a == b)
console.log(a === b)

/* Type of */
console.log(typeof null == 'object')
console.log(typeof [] == 'object')
console.log([] == [])
console.log([] === [])

/* Function */
var a = function a() {
    return typeof a == 'function'
}
console.log(a())

/* Check in browser not in node */
function check() {
    if (hasWindow) return window == this
    return false
}
console.log(check())

/* Call, Apply, Bind */
const employee = {
    name: "Photon Khan",
    age: 28
}

const display = function(hobbies, food) {
    return `My name is ${this.name}, and my age is ${this.age}, My hobbies are ${hobbies.join(', ')}, I like to have ${food}`
}

/* Call */
console.log(display.call(employee, ['guitar', 'music', 'food-bloggin'], 'Pizza'))

/* Apply */
console.log(display.apply(employee, [['guitar', 'music', 'food-bloggin'], 'Pizza']))

/* Bind */
const employeeDisplay = display.bind(employee)
console.log(employeeDisplay(['guitar', 'music', 'food-bloggin'], 'Pizza'))

/* Function Arity */
const checkNumberOfArgs = function(a, b, c) {
    return `${a}, ${b}, ${c}`
}
console.log(checkNumberOfArgs.length)

/* Closures */
var a = 5
function woot() {
    var firstResult = (a);
    var a = 6;

    function test() {
        return a == 6
    }

    return { firstResult, secondResult: test()}
}
console.log(woot())
console.log(a)

/* Works in browser */
if (hasWindow) (function () { console.log('hello') })()

/* Classes */
function Animal(name) {
    if (!name) return
    this.name = name
}

Animal.prototype.getName = function() {
    return this.name
}

Animal.prototype.eat = function(foods) {
    return `${this.name} eats: ${foods.join(', ')}`
}

var animal = new Animal('tobi')
console.log(animal.getName())
console.log(animal.eat(['macaroni', 'pepperoni']))

/* Inheritance */
function Ferret(name) {
    this.name = name
}
Ferret.prototype = new Animal()
Ferret.prototype.type = 'domestic'
Ferret.prototype.eat = function(food) {
    return `${Animal.prototype.eat.call(this, food)} and tons of other stuff`
}
const ferret = new Ferret('Mark Henry')
console.log(ferret.getName())
console.log(ferret.eat(['watermelon', 'carrot']))
console.log(ferret instanceof Animal)
console.log(ferret instanceof Ferret)

/* Try / Catch */
function hello() {
    var a = 5;
    try {
        return a()
    } catch(e) {
        return e instanceof Error
    }
}
console.log(hello())