const canSum = (n, arr, memo = {}) => {
  if (n == 0) return 1
  if (n < 0) return 0

  if (memo[n]) return memo[n]

  memo[n] = 0
  for(let i = 0; i < arr.length; i++) {
    const current = arr[i]
    memo[n] += arr.reduce((total, item) => {
      if (item == current) return total
      return total += canSum(n - item, arr, memo)
    }, 0)
  }
  return memo[n]
}

console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(300, [7, 14]))