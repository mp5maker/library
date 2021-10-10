const isTwoStringsPermutation = (string1, string2) => {
  if (string1.length !== string2.length) return false
  const newString1 = string1.split('').sort().join('')
  const newString2 = string2.split('').sort().join('')
  return newString1 == newString2
}

console.log(isTwoStringsPermutation('god', 'dog'))
console.log(isTwoStringsPermutation('mellow', 'yellow'))
console.log(isTwoStringsPermutation('why', 'hi'))