const minChange = (targetSum, numbers) => {
  const isTargetSumOdd = targetSum % 2 == 1
  const isAllNumbersEven = numbers.every((number) => number % 2 == 0)
  if (isTargetSumOdd && isAllNumbersEven) return -1

  let dp = Array.from(targetSum + 1).fill(null)
  dp[0] = []

  for (let i = 0; i <= targetSum; i++) {
    for (let number of numbers) {
      if (i + number <= targetSum) {
        const combination = [
          ...(dp[i] ? dp[i] : []),
          number
        ]
        if (dp[i + number] == null || combination.length < dp[i + number].length) {
          dp[i + number] = combination
        }
      }
    }
  }

  const ans = dp[targetSum]
  if (ans.length == 1 && ans[0] !== targetSum) return -1
  return ans.length
}


console.log(minChange(8, [1, 5, 4, 12])) // 2
console.log(minChange(13, [1, 9, 5, 14, 30])) // 5;
console.log(minChange(23, [2, 5, 7])) // 4
console.log(minChange(2017, [4, 2, 10])) // -1
console.log(minChange(271, [10, 8, 265, 24])); // -1
console.log(minChange(0, [4, 2, 10])); //0