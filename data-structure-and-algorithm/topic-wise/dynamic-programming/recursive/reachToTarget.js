const reachToTarget = (target, candidates) => {
  let res = []
  const recursive = (i, combinations, total) => {
    if (total == target) {
      res.push([...combinations])
      return
    }
    if (i >= candidates.length || total > target) return

    const current = candidates[i];
    combinations.push(current)
    recursive(i, combinations, total + current)
    combinations.pop()
    recursive(i + 1, combinations, total)
  }
  recursive(0, [], 0)
  return res
}

console.log(reachToTarget(20, [3, 5, 10]))

// const reachToTarget = (target, candidates, memo = {}) => {
//   const recursive = (targetSum, candidates) => {
//     if (targetSum == 0) return [[]];
//     if (targetSum < 0) return null;
//     if (memo[targetSum]) return memo[targetSum]

//     let result = [];
//     for (let candidate of candidates) {
//       const remainder = targetSum - candidate;
//       const remainderWays = recursive(remainder, candidates, memo);
//       if (remainderWays) {
//         const targetWays = remainderWays.map((ways) => [candidate, ...ways]);
//         result.push(...targetWays);
//       }
//     }
//     memo[targetSum] = result
//     return result;
//   };

//   return recursive(target, candidates);
// };

// console.log(reachToTarget(20, [3, 5, 10]));
