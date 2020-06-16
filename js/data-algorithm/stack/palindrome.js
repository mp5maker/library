let letters = []
const word = 'racecar'
let rword = ""

for (let i = 0; i < word.length; i++) {
    letters.push(word[i])
}

for (let i = 0; i < word.length; i++) {
    rword += letters.pop()
}

if (rword == word) console.log('Palindrome')
else console.log('Not a Palindrome')