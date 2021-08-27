const fibonacci = (_n) => {
  const recursive = (n, memo = {}) => {
    if (n == 0) return 0
    if (n == 1) return 1
    if (memo[n]) return memo[n]
    memo[n] = recursive(n - 2, memo) + recursive(n - 2, memo)
    return memo[n]
  }

  return recursive(_n)
}

console.log(fibonacci(5))