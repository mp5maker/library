function Person(name) {
    this.name = name
}

Person.prototype.talk = function() {
    console.log(`My Name is ${this.name}`)
}

module.exports = Person