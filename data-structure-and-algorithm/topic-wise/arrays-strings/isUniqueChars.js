const isUniqueChars = (word) => {
  if (word.length > 128) return false
  let dict = {}
  for (let i = 0; i < word.length; i++) {
    const current = word[i]
    if (dict[current]) return false
    else dict[current] = true
  }
  return true
}

console.log(isUniqueChars('abcb'))