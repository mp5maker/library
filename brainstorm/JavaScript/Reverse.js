const Reverse = (sentence) => {
    return sentence.split('').sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('')
}

console.log(Reverse("hello"+null))