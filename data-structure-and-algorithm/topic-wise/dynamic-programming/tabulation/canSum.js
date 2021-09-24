const canSum = (targetSum, numbers) => {
  const table = Array.from({ length: targetSum + 1 }).fill(false)
  table[0] = true
  for (let i = 0; i <= targetSum; i++) {
    const current = table[i]
    if (current == true) {
      for (let k = 0; k < numbers.length;  k++) {
        if (table[i + numbers[k]] !== undefined) table[i + numbers[k]] = true
      }
    }
  }
  return table[targetSum]
}

console.log(canSum(7, [5, 3, 4]));

