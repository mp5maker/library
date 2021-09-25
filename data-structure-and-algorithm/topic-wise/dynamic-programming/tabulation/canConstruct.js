const canConstruct = (target, wordBank) => {
  let table = Array(target.length + 1).fill(false)

  table[0] = true
  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
        const char = target[i]
        if (word.indexOf(char) == 0 && table[i] == true && i + word.length <= target.length) {
          table[i + word.length] = true
        }
    }
  }

  return table[target.length]
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // true
console.log(canConstruct('abcdef', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false