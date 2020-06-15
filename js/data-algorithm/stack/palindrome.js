// Palindrome
let letters = []
let word = "racecar"
let reverseWord = ""

for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
}

for (let i = 0; i < word.length; i++) {
    reverseWord += letters.pop()
}

if (word == reverseWord) console.log("It is a palindrome")
else console.log("It is not a palindrome")