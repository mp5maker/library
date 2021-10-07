class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(val) {
    const node = new Node(val)
    if (this.head == null) {
      this.head = node
      return this.head
    }

    let current = this.head
    let previous = null
    while(current) {
      previous = current
      current = current.next
    }
    previous.next = node
    return this.head
  }

  prepend(val) {
    const node = new Node(val)
    const current = this.head
    this.head = node
    this.head.next = current
    return this.head
  }

  print() {
    let current = this.head
    let arr = []
    while(current) {
      arr.push(current.val)
      current = current.next
    }
    return arr.join('->')
  }

  contains(val) {
    let current = this.head

    while(current) {
      if (current.val == val) return true
      current = current.next
    }

    return false
  }
}

const ll = new LinkedList()
ll.append(23)
ll.append(5)
ll.append(11)
ll.append(12)
ll.prepend(100)
console.log(ll.print())
console.log(ll.contains(20))
console.log(ll.contains(11))