const reachToTarget = (targetSum, numbers) => {
  const table = Array.from(({ length: targetSum + 1 })).fill(0)
  table[0] = 1
  for (let i = 0; i <= targetSum; i++) {
    for (let k = 0; k < numbers.length; k++) {
      const number = numbers[k]
      if (i + number <= targetSum) {
        table[i + number] += table[i]
      }
    }
  }
  return table[targetSum]
}

console.log(reachToTarget(20, [3, 5, 10]));