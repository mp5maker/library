const bestSum = (_num, _arr, memo = {}) => {
  const recursive = (num, arr) => {
    if (num == 0) return [];
    if (num < 0) return null;
    if (memo[num]) return memo[num]

    let shortestCombination = null;

    for (let item of arr) {
      const remainder = num - item;
      const remainderCombination = bestSum(remainder, arr);
      if (remainderCombination) {
        const combination = [...remainderCombination, item];
        if (
          shortestCombination == null ||
          combination.length < shortestCombination.length
        ) {
          shortestCombination = combination;
        }
      }
    }

    memo[num] = shortestCombination
    return memo[num];
  };

  return recursive(_num, _arr);
};

console.log(bestSum(8, [2, 3, 5]));
