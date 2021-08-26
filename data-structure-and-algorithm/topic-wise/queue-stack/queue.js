class Queue {
  constructor() {
    this.stack = []
  }

  enqueue(item) {
    this.stack.push(item)
  }

  dequeue() {
    return this.stack.shift()
  }

  getAll() {
    return this.stack.reverse()
  }

  size() {
    return this.stack.length
  }
}

let q = new Queue()
q.enqueue(2)
q.enqueue(3)
q.enqueue(5)
q.enqueue(7)
q.dequeue()
console.log(q.getAll())
console.log(q.size())
