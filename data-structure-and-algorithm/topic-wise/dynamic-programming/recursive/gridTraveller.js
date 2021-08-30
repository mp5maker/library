const gridTraveller = (_n, _m) => {
  const recursive = (n, m, memo = {}) => {
    const key = `${n}_${m}`
    if (n == 0 || m == 0) return 0
    if (n == 1 && m == 1) return 1
    if (memo[key]) return memo[key]
    memo[key] = recursive(n -1, m, memo) + recursive(n, m - 1, memo)
    return memo[key];
  }
  return recursive(_n, _m)
}

console.log(gridTraveller(2, 3))
