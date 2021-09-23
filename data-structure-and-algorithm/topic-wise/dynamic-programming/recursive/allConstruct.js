const allConstruct = (target, wordBank, memo = {}) => {
  if (memo[target]) return memo[target]
  if (target === '') return [[]]

  const result = []
  for(let word of wordBank) {
    if (target.indexOf(word) == 0) {
      const suffix = target.slice(word.length)
      const suffixWays = allConstruct(suffix, wordBank)
      const targetWays = suffixWays.map((way) => [
        word,
        ...way
      ])
      result.push(...targetWays)
    }
  }

  memo[target] = result
  return result
}

// console.log(allConstruct('pre', ['pre']))
console.log(allConstruct('purple', ['purp', 'p', 'r', 'ur', 'le', 'purpl']))