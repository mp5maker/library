const fibonacci = (num) => {
  let array = Array.from({ length: num + 1}, () => 0)
  array[1] = 1
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    if (array[i + 1] != undefined) array[i + 1] = current + array[i + 1]
    if (array[i + 2] != undefined) array[i + 2] = current + array[i + 2];
  }
  return array[array.length - 1]
}

console.log(fibonacci(6))