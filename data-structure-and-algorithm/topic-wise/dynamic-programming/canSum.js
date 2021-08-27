const canSum = (_num, _arr) => {
  const recursive = (num, arr, memo = {}) => {
    if (num < 0) return false;
    if (num == 0) return true;
    if (memo[num]) return memo[num]
    for (let item of arr) {
      const remainder = num - item;
      memo[num] = canSum(remainder, arr, memo)
      if (memo[num]) return true
    }
    return false
  };

  return recursive(_num, _arr)
};

console.log(canSum(7, [1, 2, 6, 7]));
