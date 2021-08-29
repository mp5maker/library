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

const canConstruct = (_s, _arr) => {
  const recursive = (s, arr) => {
    if (s == 0) return [[]];

    const result = [];

    for (let num of arr) {
      let remaining = s - num
      if (remaining >  0) {
        const remainingWays = recursive(remaining, arr);
        const targetWays = remainingWays.map((item) => [num, ...item]);
        result.push(...targetWays);
      }
    }

    return result;
  };

  return recursive(_s, _arr);
};

console.log(
  canConstruct(20, [3, 5, 10])
);
