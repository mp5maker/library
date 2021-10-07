class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.root = null
  }

  insert(val) {
    const node = new Node(val)
    let current = this.root

    if (current == null) {
      this.root = node
      return this.root
    }

    let lastLinkedList = null
    while(current) {
      lastLinkedList = current
      current = current.next
    }
    lastLinkedList.next = node
    return this.root
  }

  hasCycle() {
    // let slow = this.root
    // let fast = this.root

    // if (!slow || !slow.next) return false

    // while(slow && fast) {
    //   console.log(slow.val)
    //   console.log(fast.val)
    //   slow = slow.next
    //   fast = fast.next && fast.next.next ? fast.next.next : null
    //   if (slow && fast && slow.val == fast.val) return true
    // }

    // return false

    let current = this.root
    let visited = new Set()

    while(current) {
      if (visited.has(current.val)) return true
      visited.add(current.val)
      current = current.next
    }

    return false
  }
}

const ll = new LinkedList()
ll.insert(4)
ll.insert(3)
ll.insert(2)
ll.insert(10)
ll.insert(27)
// ll.insert(4)
console.log(ll.root)
console.log(ll.hasCycle())