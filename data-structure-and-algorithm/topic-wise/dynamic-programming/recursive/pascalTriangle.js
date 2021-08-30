const pascalTriangle = (numRows) => {
  const recursive = (n = 0, combos = []) => {
    if (n == numRows) return combos
    let lastCombo = combos[combos.length - 1]
    let newArr = []
    if (lastCombo) {
      for (let i = 0; i < lastCombo.length; i++) {
        const current = lastCombo[i]
        const prev = lastCombo[i - 1]
        if (i == 0) newArr.push(1)
        if (prev !== undefined) newArr.push(current + prev)
        if (i == lastCombo.length - 1) newArr.push(1)
      }
    }
    combos.push(newArr.length ? newArr : [1])
    return recursive(n + 1, combos)
  }
  return recursive()
}

console.log(pascalTriangle(5))