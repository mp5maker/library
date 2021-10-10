const countingSort = (arr) => {
  let table = Array.from({ length: Math.max(...arr) + 1 }).fill(0)
  for (let i = 0; i < table.length; i++) {
    const current = arr[i]
    if (table[current] != undefined) table[current] += 1
  }

  for (let i = 1; i < table.length; i++) {
    table[i] += table[i - 1]
  }

  table.pop()
  table.unshift(0)

  let newArr = Array.from({ length: arr })
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const index = table[current]
    table[current] += 1
    newArr[index] = current
  }

  return newArr
}

console.log("input", [1, 4, 1, 2, 7, 5, 2]);
console.log(countingSort([1, 4, 1, 2, 7, 5, 2]))