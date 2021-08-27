const howSum = (_num, _arr) => {
  const recursive = (num, arr, memo = {}) => {
    if (num == 0) return []
    if (num < 0) return null
    if (memo[num]) return memo[num]
    for (let item of arr) {
      const remainder = num - item
      const remainderResult = howSum(remainder, arr, memo)
      if (remainderResult) {
        memo[num] = [...remainderResult, item];
        return memo[num]
      }
    }
    memo[num] = null
    return memo[num]
  }
  return recursive(_num, _arr)
}


console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(20, [3, 5, 10]));