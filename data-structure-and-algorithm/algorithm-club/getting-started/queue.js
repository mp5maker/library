class Queue {
  constructor() {
    this.store = {};
    this.head = 0;
  }

  enqueue(val) {
    this.store[this.head] = val;
    this.head++;
  }

  dequeue() {
    const val =  this.store['0']
    delete this.store['0']
    this.store = Object.keys(this.store).reduce((newObj, key) => {
      return {
        ...newObj,
        [Number(key) - 1]: this.store[key]
      }
    }, {})
    return val
  }

  count() {
    return Object.keys(this.store);
  }

  isEmpty() {
    return this.count() == 0;
  }
}

const q = new Queue()
q.enqueue(10)
q.enqueue(3)
q.enqueue(57)
console.log(q.dequeue())
console.log(q.store)