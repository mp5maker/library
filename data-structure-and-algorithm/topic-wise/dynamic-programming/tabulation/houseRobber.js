/**
 * Cannot rob two adjacent houses
 */
const houseRobber = (nums) => {
  let arr = Array.from({ length: nums.length })
  arr[0] = nums[0]
  arr[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    arr[i] = Math.max(nums[i] + arr[i - 2], arr[i - 1])
  }

  return arr[arr.length - 1]
}

console.log(houseRobber([2, 7, 9, 3, 1]));