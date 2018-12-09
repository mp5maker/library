window.onload = init;

function init () {
    // String Reverse
    console.log("%c String Reverse", "background-color: firebrick; color: white");
    console.log(stringReverse('Hello'));

    // Longest Word
    console.log("%c Longest Word", "background-color: blue; color: white;");
    console.log(longestWord("This is.. crazy!!"));
    
    // First Factorial
    console.log("%c First Factorial", "background-color: indigo; color: white;");
    console.log(firstFactorial(8));
    
    // Sentence Reverse
    console.log("%c Sentence Reverse", "background-color: violet; color: white;");
    console.log(sentenceReverse("This is not yours"));

    // Letter Changes
    console.log("%c Letter Changes", "background-color: purple; color: white;");
    console.log(sentenceReverse("Argument goes here!"));
}

/**
 * String Reverse
 * @param {string} word 
 */
var stringReverse = (word) => {
    return word.split('').reverse().join('');
}

/**
 * Longest Word
 * @param {string} sentence 
 */
var longestWord = (sentence) => {
    let sentenceArray = sentence.split(' ')
    let pattern = /[^A-Za-z]/g;
    let maxWordLength =  {
        size: 0,
        word: null,
    };
    sentenceArray.forEach((value) => {
        value = value.replace(pattern, "");
        if (value.length > maxWordLength.size) {
            maxWordLength = {
                size: value.length,
                word: value
            };
        }
    });
    return maxWordLength.word;
}

/**
 * First Factorial
 * @param {int} number 
 */
var firstFactorial = (number) => {
    let init = 1;
    for (let i = 1; i <= number; i++) {
        init *= i;
    }
    return init;
}

/**
 * Sentence Reverse
 * @param {string} sentence 
 */
var sentenceReverse = (sentence) => {
    let sentenceArray = sentence.split(' ')
    let reverseSentenceArray = [];
    sentenceArray.forEach((value) => {
        reverseSentenceArray.push(value.split('').reverse().join(''));
    });
    return reverseSentenceArray.reverse().join(' ');
}

/**
 * Change the current position of the letter to next one
 * Capitalize the vowels [aeiou]
 * @param {string} sentence 
 */
var letterChanges = (sentence) => {
    let lettersArray = 'abcdefghijklmnopqrstuvwxyz';
    let vowelsArray = /[aeiou]+/;
    let sentenceArray = sentence.toLowerCase().split(' ');
    let newWordArray = [];
    sentenceArray.forEach((word) => {
        let wordSplit = word.split('');
        let newWord = "";
        wordSplit.forEach((alphabet) => {
            let alphabetKey = parseInt(Object.keys(lettersArray).find((key) => lettersArray[key] == alphabet)) + 1;
            if (alphabetKey) {
                if (vowelsArray.test(lettersArray[alphabetKey])) {
                    newWord += lettersArray[alphabetKey].toUpperCase();
                } else {
                    newWord += lettersArray[alphabetKey];
                }
            } else if (alphabetKey == 25) {
                newWord += lettersArray[0]
            } else {
                newWord += alphabet;
            }
        });
        newWordArray.push(newWord);
    });
    return newWordArray.join(' ');
}