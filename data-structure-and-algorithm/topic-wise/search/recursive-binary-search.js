const recursiveBinarySearch = (data, value, lower, upper) => {
  const newList = data.sort((a, b) => a - b);
  const listLength = newList.length;
  let middle =
    lower !== undefined || upper !== undefined
      ? ((upper ? upper : 0) + (lower ? lower : 0)) / 2
      : Math.ceil(listLength / 2);

  if (data[listLength - 1] == value) return listLength - 1;
  if (value == data[middle]) return middle;
  if (value > data[middle])
    return recursiveBinarySearch(data, value, middle + 1, upper);
  if (value < data[middle])
    return recursiveBinarySearch(data, value, lower, middle - 1);
};

console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 5));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 4));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 3));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 1));
console.log(recursiveBinarySearch([1, 2, 3, 4, 5], 2));
