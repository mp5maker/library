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

  recursiveDepthFirstPrint() {
    const recursive = (node, arr = []) => {
      if (node == null) return arr;
      arr.push(node.val);
      recursive(node.left, arr);
      recursive(node.right, arr);
      return arr;
    };
    let current = this.root;
    return recursive(current);
  }

  recursiveSumTree() {
    const recursive = (node) => {
      if (node == null) return 0;
      return recursive(node.left) + node.val + recursive(node.right);
    };

    let current = this.root;
    return recursive(current);
  }

  preOrder() {
    let arr = [];
    const recursive = (node) => {
      if (node) {
        arr.push(node.val);
        recursive(node.left);
        recursive(node.right);
      }
      return arr;
    };
    let current = this.root;
    return recursive(current);
  }

  inOrder() {
    let arr = [];
    const recursive = (node) => {
      if (node) {
        recursive(node.left);
        arr.push(node.val);
        recursive(node.right);
      }
      return arr;
    };
    let current = this.root;
    return recursive(current);
  }

  postOrder() {
    let arr = [];
    const recursive = (node) => {
      if (node) {
        recursive(node.left);
        recursive(node.right);
        arr.push(node.val);
      }
      return arr;
    };
    let current = this.root;
    return recursive(current);
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
console.log("sumTree", bt.sumTree());
console.log("recursiveSumTree", bt.recursiveSumTree());
console.log("===");
bt.depthFirstPrint();
console.log(bt.recursiveDepthFirstPrint());
console.log(bt.preOrder());
console.log(bt.inOrder());
console.log(bt.postOrder());
