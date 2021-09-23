const fibonacci = (num) => {
  let arr = Array.from({ length: num + 1 }).fill(0)
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i <= num; i++) {
    arr[i] += arr[i - 1] + arr[i - 2]
  }
  return arr[arr.length - 1]
}

console.log(fibonacci(6))