class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let current = this.root;
    let node = new Node(value);

    if (current == null) {
      this.root = node;
      return this.root;
    }

    while (current) {
      if (value > current.data) {
        if (current.right == null) {
          current.right = node;
          return this.root;
        }
        current = current.right;
      }
      if (value < current.data) {
        if (current.left == null) {
          current.left = node;
          return this.root;
        }
        current = current.left;
      }
    }
    return this.root;
  }

  height() {
    let current = this.root;

    const depth = (node) => {
      if (node == null) return 0;
      let left = depth(node.left);
      let right = depth(node.right);
      return left >= right ? left + 1 : right + 1;
    };

    return depth(current);
  }

  inOrderTraverse() {
    const current = this.root;
    const arr = [];

    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        arr.push(node.data);
        traverse(node.right);
      }
      return arr;
    };

    return traverse(current);
  }

  preOrderTraverse() {
    const current = this.root;
    const arr = [];

    const traverse = (node) => {
      if (node) {
        arr.push(node.data);
        traverse(node.left);
        traverse(node.right);
      }
      return arr;
    };

    return traverse(current);
  }

  postOrderTraverse() {
    const current = this.root;
    const arr = [];

    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        arr.push(node.data);
      }
      return arr;
    };

    return traverse(current);
  }

  search(value) {
    let current = this.root;

    const searching = (node) => {
      if (node == null) return null;
      if (node.data == value) return node;
      if (value > node.data) searching(node.left);
      else if (value < node.data) searching(node.right);
    };

    return searching(current);
  }
}

const bst = new BinarySearchTree();
bst.insert(23);
bst.insert(19);
bst.insert(34);
bst.insert(15);
bst.insert(20);
bst.insert(10);
bst.insert(50);
console.log(bst.root);
console.log(bst.height());
console.log(bst.inOrderTraverse());
console.log(bst.preOrderTraverse());
console.log(bst.postOrderTraverse());
console.log(bst.search(23));
