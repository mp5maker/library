const bestSum = (_num, _arr) => {
  const recursive = (num, arr) => {
    if (num == 0) return [];
    if (num < 0) return null;

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

    return shortestCombination;
  };

  return recursive(_num, _arr);
};

console.log(bestSum(8, [2, 3, 5]));
