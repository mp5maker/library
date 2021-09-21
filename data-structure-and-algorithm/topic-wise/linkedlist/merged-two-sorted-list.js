class Node {
  constructor(val, next) {
    this.val = val
    this.next = next ? next : null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insert(val) {
    let head = this.head
    const node = new Node(val)
    if (head == null) {
      this.head = node
      return this.head
    }

    let current = head
    let prev = null
    while(current) {
      prev = current
      current = current.next
    }
    prev.next = node
    return this.head
  }
}

const bst1 = new LinkedList()
const l1 = [1, 2, 4]
l1.forEach((val) => {
  bst1.insert(val)
})

const bst2 = new LinkedList()
const l2 = [1, 3, 4]
l2.forEach((val) => {
  bst2.insert(val)
})

const arrayBST = (node)  => {
  let arr = []
  while(node) {
    arr.push(node.val)
    node = node.next
  }
  return arr
}

const mergeTwoLists = function(l1, l2) {
  const head = new Node(-1)

  let current = head
  while (l1 && l2) {
    if (l1.val > l2.val) {
      current.next = l2
      l2 = l2.next
    } else {
      current.next = l1
      l1 = l1.next
    }
    console.log(current)
    current = current.next
  }

  return arrayBST(head.next)
}

console.log(mergeTwoLists(bst1.head, bst2.head))