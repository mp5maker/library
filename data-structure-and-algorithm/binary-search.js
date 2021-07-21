const binarySearch = (list, value) => {
  const newList = list.sort((a, b) => a - b)
  const listLength = newList.length
  let upperRange = listLength
  let lowerRange = 0
  let mid = Math.ceil(listLength / 2)

  if (list[upperRange - 1] == value) return (upperRange - 1)
  while (lowerRange < upperRange) {
    if (list[mid] == value) return mid
    if (value > list[mid]) lowerRange = mid + 1
    else if (value < list[mid]) upperRange = mid - 1
    mid = Math.ceil((lowerRange + upperRange) / 2)
  }

  return mid
}

console.log(binarySearch([1,2,3,4,5], 5))
console.log(binarySearch([1,2,3,4,5], 4))
console.log(binarySearch([1,2,3,4,5], 3))
console.log(binarySearch([1,2,3,4,5], 1))
console.log(binarySearch([1,2,3,4,5], 2))