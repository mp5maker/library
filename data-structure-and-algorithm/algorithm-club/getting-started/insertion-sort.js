const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let k = i; k >= 0; k--) {
      const current = arr[k]
      const prev = arr[k - 1]
      if (prev && prev > current) {
        arr[k] = prev
        arr[k - 1] = current
      }
    }
  }
  return arr
}

console.log(insertionSort([3, 5, 8, 4, 6]))