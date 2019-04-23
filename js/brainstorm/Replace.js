const ReplaceSpace = (sentence, replaceWith="%20") => {
    return sentence.replace(new RegExp("[ ]+", 'g'), replaceWith);
}

console.log(ReplaceSpace("Hi, How are you?"))