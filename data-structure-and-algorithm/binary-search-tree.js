class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
    this.height = this.height.bind(this)
  }

  insert(value) {
    let current = this.root
    let node = new Node(value)
    if (current == null) {
      this.root = node
      return this.root
    }

    while(current) {
      if (value == current.value) return this.root
      if (value < current.value) {
        if (current.left == null) {
          current.left = node
          return this.root
        }
        current = current.left;
      }
      if (value > current.value) {
        if (current.right == null) {
          current.right = node
          return this.root
        }
        current = current.right
      }
    }
  }

  height() {
    let current = this.root

    const depth = (node) => {
      if (node == null) return 0;
      let leftNode = depth(node.left)
      let rightNode = depth(node.right)
      return leftNode > rightNode ? leftNode + 1 : rightNode + 1
    }

    return depth(current)
  }
}

let bst = new BinarySearchTree()
bst.insert(3);
bst.insert(5);
bst.insert(2);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(7);
console.log(bst.root)
console.log(bst.height());