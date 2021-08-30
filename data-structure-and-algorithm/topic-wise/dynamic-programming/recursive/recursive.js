const factorial = (value) => {
  if (value == 0) return 1
  if (value == 1) return value
  return value * factorial(value - 1)
}

const pow = (value, power) => {
  if (value == 0 || value == 1) return 1
  if (power == 1) return value
  return value * pow(value, power - 1)
}

const getNthOddNumber = (howMany) => {
  if (howMany == 1) return howMany
  const recursiveValue = getNthOddNumber(howMany - 1)
  return recursiveValue + 2
}

console.log(factorial(3))
console.log(pow(2,3))
console.log(getNthOddNumber(6));