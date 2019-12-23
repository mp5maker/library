const bubbleSort = (list) => {
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < list.length; i++) {
            let current = list[i]
            let next = list[i + 1]
            if (next < current) {
                list[i] = next;
                list[i + 1] = current;
                swapped = true;
            }
        }
    }
    while (swapped)

    return list
}

const sampleArray = [700, 23, 52, 12, 290, 100, 5, 10, 59, 900, 124301]
console.log(bubbleSort(sampleArray))