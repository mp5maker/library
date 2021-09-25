class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const treeMinVal = (head) => {
  let current = head
  let min = null

  const traversal = (node) => {
    if (node) {
      const current = node.val
      if (min == null || current < min) min = current
      if (node.right) traversal(node.right)
      if (node.left) traversal(node.left)
    }
    return min
  }

  return traversal(current)
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(treeMinVal(a)) // 3