function* generatorFunction() {
    console.log("First Execution")
    yield "Hello"

    console.log("Second Execution")
    yield "World"
}

const generatorObject = generatorFunction()
generatorObject.next()
generatorObject.next()


function* anotherGeneratorFunction() {
    const firstItem = yield "Potatoes"
    const secondItem = yield "Tomatoes"
    const thirdItem = yield "Okay"
    return [firstItem, secondItem, thirdItem]
}

const anotherGeneratorObject = anotherGeneratorFunction()
console.log(anotherGeneratorObject.next())
console.log(anotherGeneratorObject.next(2))
console.log(anotherGeneratorObject.next(3))
console.log(anotherGeneratorObject.next(4))