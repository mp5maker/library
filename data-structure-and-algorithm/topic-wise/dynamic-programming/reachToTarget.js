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