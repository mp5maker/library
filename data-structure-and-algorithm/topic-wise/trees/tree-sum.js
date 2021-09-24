class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

const treeSum = (root) => {
  let sum = 0;
  let stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node.val !== undefined) sum += node.val;
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return sum;
};

console.log(treeSum(a)); // -> 10
