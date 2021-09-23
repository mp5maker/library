const bestSum = (_targetSum, _numbers) => {
  const recursive = (targetSum, numbers, memo = {}) => {
    if (targetSum == 0) return [];
    if (targetSum < 0) return null;
    if (memo[targetSum]) return memo[targetSum];

    let shortestCombination = null;
    for (let i = 0; i < numbers.length; i++) {
      const current = numbers[i];
      const pathCombo = recursive(targetSum - current, numbers, memo);
      memo[targetSum] = pathCombo;

      if (pathCombo) {
        let combinations = [current, ...pathCombo];
        if (shortestCombination == null) shortestCombination = combinations;
        else {
          if (shortestCombination.length > combinations.length)
            shortestCombination = combinations;
        }
      }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
  };

  return recursive(_targetSum, _numbers);
};

console.log(bestSum(8, [2, 3, 5]));
