class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  getAll() {
    return this.stack;
  }

  size() {
    return this.stack.length;
  }
}


let stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
console.log(stack.getAll())
console.log(stack.size())