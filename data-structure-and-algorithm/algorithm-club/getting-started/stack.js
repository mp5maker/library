class Stack {
  constructor() {
    this.head = 0
    this.store = {}
  }

  push(val) {
    this.store[this.head] = val
    this.head++
  }

  pop() {
    const temp = this.store[this.head - 1]
    delete this.store[this.head - 1]
    this.head--
    return temp
  }
}

const stack = new Stack()
stack.push(10)
stack.push(3)
stack.push(57)
console.log(stack.pop())
console.log(stack.store)