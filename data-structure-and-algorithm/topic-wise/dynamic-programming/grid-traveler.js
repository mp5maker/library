
let dict = {}
const gridTraveler = (n, m) => {
  if (n <= 0 || m <= 0) return 0
  if (n == 1 && m == 1) return 1
  if (dict[n]) return dict[n]
  dict[n] = gridTraveler(n - 1, m) + gridTraveler(n, m - 1)
  return dict[n]
}

console.log(gridTraveler(2,3))