const fibonacci = (num) => {
  let table = Array(num + 1).fill(0)
  table[1] = 1
  for (let i = 0; i <= num; i++) {
    const current = table[i]
    table[i + 1] += current
    table[i + 2] += current
  }
  return table[num]
}

console.log(fibonacci(6))