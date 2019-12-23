const linearSearch = (list, lookFor) => {
    let index = "";
    for(let i = 0; i < list.length; i++) {
        if (list[i] == lookFor) {
            index = i
            break;
        }
    }
    return index
}

const sampleArray = [700, 23, 52, 12, 290, 100, 5, 10, 59, 900, 124301]
console.log(linearSearch(sampleArray, 100))