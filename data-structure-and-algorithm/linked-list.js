class Node {
  constructor(data) {
    this.current = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
  }

  isEmpty() {
    return this.head == null
  }

  size() {
    let counter = 0
    let current = this.head

    while (current) {
      current = current.next
      counter++
    }

    return counter
  }

  print() {
    let current = this.head
    let stores = []

    while (current) {
      stores.push(current.current)
      current = current.next
    }

    return stores.join('->')
  }

  search(value) {
    let current = this.head
    let counter = 0
    while (current) {
      if (current.current == value) return counter
      current = current.next
      counter++
    }
    return null
  }

  insert(index, value) {
    let current = this.head
    let newNode = new Node(value)

    if (current == null || index == 0) {
      newNode.next = this.head
      this.head = newNode
      return
    } else {
      let counter = 0
      while (counter < index - 1) {
        current = current.next
        counter++
      }
      newNode.next = current.next
      current.next = newNode
    }
  }

  remove(index) {
    let current = this.head
    let counter = 0
    if (index == 0) this.head = this.head.next
    while (counter < index - 1) {
      current = current.next
      counter++
    }
    const next = (current.next).next
    current.next = next
  }

  nodeAtIndex(index) {
    if (index == 0) return this.head
    else {
      let current = this.head
      let position = 0
      while (position < index) {
        current = current.next
        position++
      }
      return current
    }
  }
}

const ll = new LinkedList()
ll.append(10)
ll.append(30)
ll.append(27)
ll.append(4)
console.log("🚀 ~ file: linked-list.js ~ line 82 ~ ll.print()", ll.print())
ll.insert(1, 23)
console.log("🚀 ~ file: linked-list.js ~ line 82 ~ ll.print()", ll.print())
ll.remove(1)
console.log("🚀 ~ file: linked-list.js ~ line 82 ~ ll.print()", ll.print())
console.log("🚀 ~ file: linked-list.js ~ line 80 ~ ll.size()", ll.size())
console.log("🚀 ~ file: linked-list.js ~ line 81 ~ ll.search(30)", ll.search(30))

module.exports = LinkedList