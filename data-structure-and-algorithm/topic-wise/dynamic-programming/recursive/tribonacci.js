const tribonacci = (num) => {
  const recursive = (targetNum, memo = {}) => {
    if (targetNum == 2) return 1;
    if (targetNum == 1) return 1;
    if (targetNum == 0) return 0;
    if (memo[targetNum]) return memo[targetNum];

    memo[targetNum] =
      recursive(targetNum - 1, memo) +
      recursive(targetNum - 2, memo) +
      recursive(targetNum - 3, memo);
    return memo[targetNum]
  };

  return recursive(num);
};

console.log(tribonacci(6));
