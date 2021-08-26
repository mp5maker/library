class Queue {
  constructor() {
    this.dict = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.dict[this.tail++] = item;
  }

  dequeue() {
    if (this.head == this.tail) return undefined;

    const value = this.dict[this.head];
    delete this.dict[this.head++];
    return value;
  }

  getAll() {
    return Object.keys(this.dict).map((item) => this.dict[item]);
  }

  size() {
    return Object.keys(this.dict).length;
  }
}

let q = new Queue();
q.enqueue(2);
q.enqueue(5);
q.enqueue(7);
q.enqueue(9);
q.dequeue();
console.log(q.getAll());
console.log(q.size());
