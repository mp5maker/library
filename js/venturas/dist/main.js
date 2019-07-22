function LRUCache(strArr) {

    const allowFunction = strArr.length > 0;
    const allUpperCaseStringArray = strArr.map((letter) => letter.toUpperCase());

    if (allowFunction) {
        const newArray = allUpperCaseStringArray.reduce((newArr, letter) => {
            if (newArr.includes(letter)) {
                const index = newArr.indexOf(letter)
                newArr.splice(index, 1)
                return [...newArr, letter]
            }
            return [...newArr, letter]
        }, [])
        return newArray.join("-");
    }

    if (!allowFunction) return;
}


console.log(LRUCache(["A", "B", "A", "C", "A", "B"]))


function MinWindowSubstring(strArr) {
    // Condition to start the function
    const firstItemCondition = strArr[0].length > 2 && strArr[0].length < 51;
    const secondItemCondition = strArr[1].length > 2 && strArr[1].length < 51;
    const allowFunction = firstItemCondition && secondItemCondition && strArr.length == 2;

    if (allowFunction) {
        // Converting all of them in lowercase
        const phrase = strArr[0].toLowerCase();
        const search = strArr[1].toLowerCase();

        // Convert the search, phrase into an array
        const searchArray = search.split("");
        const phraseArray = phrase.split("");

        // Get the size of search and phrase
        const searchLength = searchArray.length;
        const phraseLength = phraseArray.length;

        // List down the number of occurance of the letters in literal object form
        const numberOfOccurance = (requiredArray) => {
            return [...requiredArray].reduce((newObj, letter) => {
                if (letter in newObj) {
                    return Object.assign({}, newObj, { [letter]: newObj[letter] + 1 })
                }
                return Object.assign({}, newObj, { [letter]: 1 })
            }, {});
        }

        // Number of Occurance in Search
        const searchNumberOfOccurance = numberOfOccurance(searchArray);

        // List down all the locations of the search phrase where it matches with the letters in search
        const listDownTheLocation = phraseArray.reduce((newArr, letter, index) => {
            if (searchArray.includes(letter)) {
                return [...newArr, [index, letter]];
            }
            return newArr;
        }, [])

        let left = 0, right = 0, counter = 0;
        let listDownValidArrays = [], splittedArray = [];

        while (counter < phraseLength) {
            // Filtering from the right hand side
            splittedArray = phrase.split(0, phraseLength - counter);
            let splittedArrayNumberOfOccurrance = numberOfOccurance(splittedArray)
            let rightHandSidePass = true;

            Object.keys(splittedArray).forEach((property) => {
                if (splittedArrayNumberOfOccurrance[property] !== searchNumberOfOccurance[property]) {
                    rightHandSidePass = false;
                }
            })

            // TODO: Filtering from the left hand side
            // TODO: Filtering from the left to right and right to left

            if (rightHandSidePass) listDownValidArrays.push(splittedArray)
            counter++;
        }

        let smallestArray = listDownValidArrays.sort((a, b) => {
            return a.length - b.length;
        })[0];

        return smallestArray;
    }

    if (!allowFunction) return;
}

console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]))