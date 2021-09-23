const canSum = (_target, _numbers) => {
  const recursive = (target, numbers, memo = {}) => {
    if (target == 0) return true;
    if (target < 0) return false;
    if (memo[target]) return memo[target];

    for (let i = 0; i < numbers.length; i++) {
      const current = numbers[i];
      const metTarget = recursive(target - current, numbers, memo);
      memo[target] = metTarget;
      if (metTarget) return true;
    }

    memo[target] = false;
    return memo[target];
  }

  return recursive(_target, _numbers)
}

console.log(canSum(7, [5, 3, 4, 7]));