// const reachAGivenScore = (num) => {
//   let table = {
//     "0": 1
//   }
//   for (let i = 3; i <= num; i++) table[i] = (table[i] ? table[i] : 0) + (table[i - 3] ? table[i - 3] : 0)
//   console.log(table)
//   for (let i = 5; i <= num; i++) table[i] = (table[i] ? table[i] : 0) + (table[i - 5] ? table[i - 5] : 0);
//   console.log(table)
//   for (let i = 10; i <= num; i++) table[i] = (table[i] ? table[i] : 0) + (table[i - 10] ? table[i - 10] : 0);
//   console.log(table)
//   return table[num]
// };

// console.log(reachAGivenScore(20));

const reachAGivenScore = (num) => {
  const recursive = (targetNum, combo = [], combinations = []) => {
    if (targetNum < 0) return 0
    if (targetNum == 0) {
      combinations.push(combo)
      return 1
    }
    for (item of [3, 5, 10]) {
      const remainder = targetNum - item
      recursive(remainder, [item, ...combo], combinations)
    }
    return combinations
  };

  return recursive(num);
};

console.log(reachAGivenScore(20));
