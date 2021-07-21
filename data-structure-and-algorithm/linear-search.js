class LinearSearch {
  constructor(data) {
    this.list = data
  }

  findByValue(value) {
    const list = this.list
    const listLength = list.length
    let i = 0
    while (i < listLength) {
      if (list[i] == value) return i
      else i++
    }
    return null
  }
}

const ls = new LinearSearch([43,52,12,51])
console.log(ls.findByValue(12))
console.log(ls.findByValue(100))
