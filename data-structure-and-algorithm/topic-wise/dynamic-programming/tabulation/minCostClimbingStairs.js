/**
 * User can either start from index 0 or 1
 */
const minCostClimbingStairs = (_cost) => {
  let cost = [..._cost]
  for (let i = 2; i < cost.length; i++) {
    const current = cost[i]
    cost[i] = Math.min(current + cost[i - 1], current + cost[i - 2])
  }
  return cost[cost.length - 1]
}

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));