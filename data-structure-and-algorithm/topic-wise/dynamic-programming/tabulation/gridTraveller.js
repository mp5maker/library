const gridTraveller = (m,n) => {
  const table = Array.from({ length: m + 1}, () => Array.from({ length: n + 1} , () => 0))
  table[1][1] = 1

  for (let i = 0; i <= m; i++) {
    for (let k = 0; k <= n; k++) {
      const current = table[i][k]
      if (i + 1 <= m) table[i + 1][k] += current
      if (k + 1 <= n) table[i][k + 1] += current
    }
  }

  return table[m][n]
}


console.log(gridTraveller(1, 1))
console.log(gridTraveller(3, 3))
console.log(gridTraveller(3, 2))
console.log(gridTraveller(3, 3))
console.log(gridTraveller(18, 18))