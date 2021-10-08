class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    let current = this.root;
    if (this.root == null) {
      this.root = node;
      return this.root;
    }

    while (current) {
      if (val > current.val) {
        if (!current.right) {
          current.right = node;
          return this.root;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          return this.root;
        }
        current = current.left;
      }
    }

    return this.root;
  }

  breadthFirstPrint() {
    let current = this.root;
    let queue = [current];

    while (queue.length) {
      const current = queue.shift();
      console.log(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  breadthFirstSearch(val) {
    let current = this.root;
    const queue = [current];

    while (queue.length) {
      const current = queue.shift();
      if (current.val == val) return true;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return false;
  }

  height() {
    let current = this.root;
    const queue = [[current, 0]];

    let x = 0;
    while (queue.length) {
      const [current, distance] = queue.shift();
      if (current.left) queue.push([current.left, distance + 1]);
      if (current.right) queue.push([current.right, distance + 1]);
      if (queue.length == 0) x = distance;
    }
    return x;
  }

  sumTree() {
    let current = this.root;
    let queue = [current];

    let sum = 0;
    while (queue.length) {
      const current = queue.shift();
      sum += current.val;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return sum;
  }

  depthFirstPrint() {
    let current = this.root;
    const stack = [current];
    while (stack.length) {
      const current = stack.pop();
      console.log(current.val);
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }
}

const bt = new BinaryTree();
Array(...[10, 5, 23, 3, 4, 25]).forEach((item) => bt.insert(item));
console.log(bt.root);
console.log("===");
bt.breadthFirstPrint();
console.log("===");
console.log(bt.breadthFirstSearch(4));
console.log(bt.breadthFirstSearch(71));
console.log(bt.height());
console.log(bt.sumTree());
console.log("===");
bt.depthFirstPrint();
