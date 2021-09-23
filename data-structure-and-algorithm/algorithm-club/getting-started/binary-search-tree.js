class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    let current = this.root;

    if (current == null) {
      this.root = node;
      return this.root;
    }

    while (current) {
      if (val > current.val) {
        if (current.right == null) {
          current.right = node;
          return this.root;
        }
        current = current.right;
      } else {
        if (current.left == null) {
          current.left = node;
          return this.root;
        }
        current = current.left;
      }
    }
  }

  preOrder() {
    let current = this.root
    let arr = []

    const traversal = (node) => {
      if (node) {
        arr.push(node.val)
        traversal(node.left)
        traversal(node.right)
      }
      return arr
    }

    return traversal(current)
  }

  inOrder() {
    let current = this.root
    let arr = []
    const traversal = (node) => {
      if (node) {
        traversal(node.left)
        arr.push(node.val)
        traversal(node.right)
      }
      return arr
    }

    return traversal(current)
  }

  postOrder() {
    let current = this.root
    let arr = []

    const traversal = (node) => {
      if (node) {
        traversal(node.left)
        traversal(node.right)
        arr.push(node.val)
      }
      return arr
    }

    return traversal(current)
  }
}

let bst = new BinarySearchTree()
let arr = [7, 2, 10, 1, 5, 9]
arr.forEach((item) => bst.insert(item))
console.log(bst.preOrder())
console.log(bst.inOrder())
console.log(bst.postOrder())
