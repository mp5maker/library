const power = (a, n) => {
  if (n == 1) return 1
  if (n < 1) return 0
  return a * power(a, n - 1)
}

console.log(power(2, 4) * 2)