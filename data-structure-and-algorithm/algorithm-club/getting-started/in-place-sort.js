const inPlaceSort = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const findIndex = newArr.findIndex((num) => {
      return num > current
    })
    if (findIndex > -1) {
      newArr = [
        ...newArr.slice(0, findIndex),
        current,
        ...newArr.slice(findIndex)
      ]
    } else newArr.push(current)
  }
  return newArr
}

console.log(inPlaceSort([8, 3, 5, 4, 6]))