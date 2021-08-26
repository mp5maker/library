const arr = [1,3,5,1,8,0,3,5,7,8,2,4,6,8]
// [1, 2, 3, 4, 5, 6,  7, 8];
// [1,3,5,7] = 16

const ok = (arr) => {
  const { sum } =  arr.reduce((newObj, item) =>{
    const isOdd = item % 2 == 1
    if (newObj.letters[`number_${item}`]) {
      return newObj
    } else {
        if (isOdd) {
          return {
            ...newObj,
            letters: {
              ...newObj.letters,
              [`number_${item}`]: 1,
            },
            sum: newObj.sum + item,
          };
        }
    }
    return newObj
  }, {
    sum: 0,
    letters: {}
  })
  return sum
}


console.log(ok(arr))