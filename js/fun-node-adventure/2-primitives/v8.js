const hasWindow = typeof window !== 'undefined'

/* Looping Keys */
const list  = {
    food: 'macaroni',
    groceries: 'orange'
}
Object.prototype.cleaning = 'brasso cleaner'

for (let item in list) if (list.hasOwnProperty(item)) console.log(item)
console.log(Object.keys(list))


/* Array */
console.log("Array.isArray(new Array)", Array.isArray(new Array))
console.log("Array.isArray([])", Array.isArray([]))
console.log("Array.isArray(null)", Array.isArray(null))
console.log("Array.isArray(arguments)", Array.isArray(arguments))

/* Array */
if (hasWindow) [1, 2, 3].forEach((v) => console.log(v))
if (hasWindow) [15, 10, 5].map((v) => console.log(v / 5))

/* JSON */
const obj = JSON.parse('{ "a": "b" }')
console.log("obj.a == 'b'", obj.a == 'b')

/* Function Bind */
function a() { return this.hello == 'world' }
var b = a.bind({ hello: 'world' })
console.log(b())

var a = function woot() {}
console.log(a.name)
console.log(a.length)

const hi = (hello, hi) => {
    return `${hello} ${hi}`
}
console.log(hi.name)
console.log(hi.length)

/* Prototype and Proto */
function Animal(name) {
    if (!name) return
    this.name = name
}

Animal.prototype.getName = function() {
    return this.name
}

Animal.prototype.eat = function(foods) {
    return `${this.name} likes to have ${foods.join(', ')}`
}

function Ferret() {}
Ferret.prototype.__proto__ = Animal.prototype
Ferret.prototype.eat = function(foods) {
    return `${Animal.prototype.eat.bind(this, foods)} and other foods`
}

const animal = new Animal('Ben')
console.log(animal.getName())
console.log(animal.eat(['pumpkin', 'tomato']))

const ferret = new Animal('Jenny')
console.log(ferret.getName())
console.log(ferret.eat(['carrot', 'leaves']))

/* Accessors */
if (hasWindow) {
    Date.prototype.__defineGetter__('ago', function() {
        const diff = (new Date().getTime() - this.getTime()) / 1000
        const day_diff = Math.floor(diff / (60 * 60 * 24))

        if (day_diff == 0 && diff < 60) return 'just now'
        if (day_diff == 0 && diff < 120) return '1 minute ago'
        if (day_diff == 0 && diff < 3600) return `${Math.floor(diff / 60)} minutes ago`
        if (day_diff == 1) return `Yesterday`
        if (day_diff < 7) return `${day_diff} days ago`
        return `${Math.ceil(day_diff / 7)} weeks ago`
    })

    const a = new Date('12/12/1990')
    console.log(a.ago)
}