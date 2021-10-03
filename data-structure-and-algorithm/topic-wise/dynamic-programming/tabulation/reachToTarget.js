const reachToTarget = (targetSum, numbers) => {
  let table = Array.from({ length: targetSum + 1 }, () => 0);
  table[0] = 1;
  for (let num of numbers) {
    for (let i = num; i <= targetSum; i++) {
      table[i] += table[i - num];
    }
  }
  return table[targetSum];
};

console.log(reachToTarget(20, [3, 5, 10]));
