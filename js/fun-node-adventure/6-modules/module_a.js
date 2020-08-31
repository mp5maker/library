exports.name = 'John'
exports.data = { secret: "bro" }

var privateVariable =  5
exports.getPrivate = function() {
    return privateVariable
}