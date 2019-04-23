const isAnagram = (wordOne, wordTwo) => {
    const reverseWordOne = String(wordOne.split('').reverse().join(''));
    return reverseWordOne == wordTwo;
}

console.log(isAnagram('tar', 'rat'))