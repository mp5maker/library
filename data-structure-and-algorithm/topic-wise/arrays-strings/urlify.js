const URLify = (str, trueLength) => {
  const substr = str.substring(0, trueLength)
  return substr.replace(/[\s]/g, '%20')
}

console.log(URLify('Mr John Smith     ', 13))