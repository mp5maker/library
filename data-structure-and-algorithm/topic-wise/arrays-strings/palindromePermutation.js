const isPalindromePermutation = (str) => {
  let dict = {}
  let min = 'a'.charCodeAt(0)
  let max = 'z'.charCodeAt(0)
  for (let char of str) {
    const lower = char.toLowerCase()
    const current = lower.charCodeAt(0)
    if (current >= min && current <= max) dict[lower] = dict[lower] ? dict[lower] + 1: 1
  }

  let counter = 0
  for (let char of Object.keys(dict)) {
    if (dict[char] % 2 == 1) counter++
    if (counter == 2) return false
  }

  return true
}

console.log(isPalindromePermutation("Tact Coa"))
console.log(isPalindromePermutation("chocolate"))
console.log(isPalindromePermutation("cd"))
console.log(isPalindromePermutation("race car"))
console.log(isPalindromePermutation("dog"))