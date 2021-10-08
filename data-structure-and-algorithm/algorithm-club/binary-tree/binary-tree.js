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
    let current = this.root
    const queue = [current]

    while(queue.length) {
      const current = queue.shift()
      if (current.val == val) return true
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return false
  }
}

const bt = new BinaryTree();
Array(...[10, 5, 23, 3, 4, 25]).forEach((item) => bt.insert(item));
console.log(bt.root);
bt.breadthFirstPrint();
console.log(bt.breadthFirstSearch(4))
console.log(bt.breadthFirstSearch(71))
