const reachToTarget = (_targetSum, _numbers) => {
  const recursive = (targetSum, numbers, memo = {}) => {
    if (targetSum == 0) return [[]]
    if (targetSum < 0) return null
    if (memo[targetSum]) return memo[targetSum]

    let result = []
    for (let i = 0; i < numbers.length; i++) {
      const current = numbers[i]
      const destinations = recursive(targetSum - current, numbers, memo)
      if (destinations) {
        const targetWays = destinations.map((ways) => [current, ...ways])
        result.push(...targetWays)
      }
    }

    memo[targetSum] = result
    return result
  }

  return recursive(_targetSum, _numbers)
}


console.log(reachToTarget(20, [3, 5, 10]));
