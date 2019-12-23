const selectionSort = (list) => {
    const isArray = Array.isArray(list)
    const arrayLength = list.length

    if (isArray) {
        let newArray = []
        for(let i = 0; i < arrayLength; i++) {
            let minimumValue = list[i]
            let minimumValueIndex = 0
            let currentValue = list[i]
            for (let j = i; j < arrayLength; j++) {
                if (list[j] < minimumValue) {
                    minimumValue = list[j]
                    minimumValueIndex = j
                }
            }
            list[minimumValueIndex] = currentValue
            list[i] = minimumValue
            newArray[i] = minimumValue
        }
        return newArray
    }
    return list
}

const sampleArray = [700, 23, 52, 12, 290, 100, 5, 10, 59, 900, 124301]
console.log(selectionSort(sampleArray))