class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}


class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    let current = this.root
    const node = new Node(val)

    if (current == null) {
      this.root = node
      return this.root
    }

    while(current) {
      if (val > current.val) {
        if (current.right == null) {
          current.right = node
          return this.root
        }
        current = current.right
      } else {
        if (current.left == null) {
          current.left = node
          return this.root
        }
        current = current.left
      }
    }
    return this.root
  }
}

const invertTree = function (root) {
  let current = root;

  const traversal = (node) => {
    if (node) {
      const right = node.right;
      node.right = node.left;
      node.left = right;
      traversal(node.right);
      traversal(node.left);
    }
    return node;
  };

  return traversal(current);
};

let arr = [4, 2, 7, 1, 3, 6, 9];
let bst = new BinarySearchTree()
arr.forEach((item) => bst.insert(item))
console.log(invertTree(bst.root)) //[4,7,2,9,6,3,1]