const mergeSort = (list) => {
  const split = (data) => {
    const mid = Math.ceil(listLength / 2);
    const left = data.slice(0, mid);
    const right = data.slice(mid, data.length);
    return { left, right };
  };

  const merge = (left, right) => {
    let i = 0;
    let j = 0;
    let newArray = [];
    const leftLength = left.length;
    const rightLength = right.length;

    while (i < leftLength && j < rightLength) {
      if (left[i] < right[j]) {
        newArray.push(left[i]);
        i++;
      }
      if (right[j] < left[i]) {
        newArray.push(right[j]);
        j++;
      }
    }

    while (i < leftLength) {
      newArray.push(left[i]);
      i++;
    }

    while (j < rightLength) {
      newArray.push(right[j]);
      j++;
    }

    return newArray;
  };

  const listLength = list.length;
  if (listLength <= 1) return list;

  const { left, right } = split(list);
  const _left = mergeSort(left);
  const _right = mergeSort(right);
  return merge(_left, _right);
};

const verifySorted = (list) => {
  if (list.length == 0 || list.length == 1) return true
  return (list[0] < list[1]) && verifySorted(list.slice(1, list.length))
}

const sample = [4, 3, 6, 9, 13, 20, 21, 1, 2];
const sortedData = mergeSort(sample);
console.log(sortedData);
console.log(verifySorted([234,5,2,5]))
console.log(verifySorted(sortedData))
