const binarySearch = (arr, find) => {
  const length = arr.length

  let upper = length
  let mid = Math.ceil(length / 2)
  let lower = 0

  if (arr[upper - 1] == find) return upper - 1

  while(lower < upper) {
    if (arr[mid] == find) return mid
    if (find > arr[mid]) lower = mid + 1
    else if (find < arr[mid]) upper = mid - 1
    mid = Math.ceil((lower + upper) / 2)
  }

  return mid
};

console.log(
  binarySearch(
    [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67],
    43
  )
);
