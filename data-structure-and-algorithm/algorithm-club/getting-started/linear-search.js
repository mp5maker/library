const linearSearch = (arr, find) => {
  for (let i = 0; i < arr.length; i++) if (arr[i] == find) return i
}

console.log(
  linearSearch([
    11, 59, 3, 2, 53, 17, 31, 7, 19, 67, 47, 13, 37, 61, 29, 43, 5, 41, 23,
  ], 43)
);