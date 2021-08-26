function insertionSort1(arr) {
  if (arr.length == 1) return arr.join(" ");

  let combinations = [];
  let last = arr[arr.length - 1];
  for (let i = arr.length - 2; i > -1; i--) {
    if (arr[i] > last) arr[i + 1] = arr[i];
    else if (arr[i] < last) {
      arr[i + 1] = last;
      last = arr[i];
    }
    combinations.push(arr.join(" "));
  }
  if (arr[0] > last) {
    arr[1] = arr[0];
    arr[0] = last;
    combinations.push(arr.join(" "));
  }

  return [...new Set(combinations)]
}

console.log(insertionSort1([2 ,4 ,6 ,8 ,3]))