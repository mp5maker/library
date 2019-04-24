const removeDuplicate = (sentence) => {
    return sentence.split('').filter((value, key, self) => {
        return self.indexOf(value) == key;
    }).join('');
}

console.log(removeDuplicate('Hello World'));