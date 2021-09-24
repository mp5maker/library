const howSum = (targetSum, nums) => {
  let table = Array.from({ length: targetSum + 1 }).fill(null)
  table[0] = []
  for (let i = 0; i <= targetSum; i++) {
    for (let k = 0; k < nums.length; k++) {
      const number = nums[k]
      if (Array.isArray(table[i]) && (i + number <= targetSum)) {
        table[i + number] = [...table[i], number]
      }
    }
  }
  return table[targetSum]
}

console.log(howSum(7, [5, 3, 4]))