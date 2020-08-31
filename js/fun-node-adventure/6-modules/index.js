const a = require('./module_a')
const Person = require('./person')

console.log(a.name)
console.log(a.data)
console.log(a.getPrivate())

const person = new Person('Photon')
person.talk()