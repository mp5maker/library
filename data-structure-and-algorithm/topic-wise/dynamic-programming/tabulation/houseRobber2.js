/**
 * Can't rob two adjacent house, the houses are circle
 * Therefore first house is connected to last house
 */
const houseRobber2 = (nums) => {
  const performAction = (numbers) => {
    let table = Array.from({ length: numbers.length });
    table[0] = numbers[0];
    table[1] = Math.max(numbers[0], numbers[1]);

    for (let i = 2; i < numbers.length; i++) {
      table[i] = Math.max(numbers[i] + table[i - 2], table[i - 1]);
    }

    return table[numbers.length - 1];
  };
  return Math.max(
    nums[0],
    performAction(nums.slice(1)),
    performAction(nums.slice(0, nums.length - 1))
  );
};

console.log(houseRobber2([1, 2, 3, 1]));
