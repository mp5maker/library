const allConstruct = (target, wordBank) => {
  let table = Array(target.length + 1).fill().map(() => [])
  console.log('table', table)
  table[0] = [[]]

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) == word) {
        const combinations = table[i].map(subArray => [...subArray, word])
        table[i + word.length].push(...combinations)
      }
    }
  }

  return table[target.length]
};

// console.log(allConstruct('pre', ['pre']))
console.log(allConstruct("purple", ["purp", "p", "r", "ur", "le", "purpl"]));
