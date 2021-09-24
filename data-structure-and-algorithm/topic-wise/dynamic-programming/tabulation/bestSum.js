const bestSum = (targetSum, numbers) => {
  let dp = Array(targetSum + 1).fill(null)
  dp[0] = []

  for (let i = 0; i <= targetSum; i++) {
    for (let k = 0; k < numbers.length; k++) {
      const number = numbers[k]
      if (i + number <= targetSum) {
        const combinations = [...(dp[i] ? dp[i] : []), number]
        if (dp[i + number] == null || combinations.length < dp[i + number].length)
          dp[i + number] = combinations;
      }
    }
  }

  return dp[targetSum]
};

console.log(bestSum(8, [2, 3, 5]));
