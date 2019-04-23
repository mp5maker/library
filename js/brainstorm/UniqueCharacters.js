const charactersAreUnique = (sentence) => {
    let buildASentence = [];
    let status = sentence.split('').find((character) => {
        if (buildASentence.includes(character)) {
            return character;
        }
        buildASentence.push(character);
    })
    return status ? false : true;
}

console.log(charactersAreUnique("Hemo"))
console.log(charactersAreUnique("Hello World!"))