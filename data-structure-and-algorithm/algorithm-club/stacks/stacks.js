class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val)
    if (this.top == null) {
      this.top = node
      return this.top
    }

    node.next = this.top
    this.top = node
    this.size++
    return this.top
  }

  pop() {
    if (this.size == 0) return null
    const val = this.top.val
    this.top = this.top.next
    return val
  }

  getTop() {
    return this.top.val
  }
}


let s = new Stack()
s.push('a')
s.push('b')
s.push('c')
console.log(s.size)
console.log(s.top)
console.log(s.getTop())
console.log(s.pop())
console.log(s.top)