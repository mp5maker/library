// Concept of bind [Passes the object's this to the function]
var person = {
    firstname: "Photon",
    lastname: "Khan",
    getName: function() {
        return this.firstname + " " + this.lastname;
    }
}

var personName = function() {
    return this.getName() + " I choose you!";
}

var logPersonName = personName.bind(person);
console.log(logPersonName());

// Concept of call [Calls a function with a given this value]
// 1. Call accetps paramters
// 2. Executes the function, it was called right a way
// 3. The call() function does not make a copy of the function it is being called on.
var personHobbies = function(...hobbies) {
    return this.getName() + " has " + hobbies.join(', ') + " as hobbies";
}

// Call
console.log(personHobbies.call(person, 'eating', 'sleeping'));

// Apply
console.log(personHobbies.apply(person, ['eating', 'sleeping']));