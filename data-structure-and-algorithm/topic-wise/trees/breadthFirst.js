class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

const breadthFirstValues = (root) => {
  if (root === null) return [];
  let stack = [root];
  let arr = [];

  while (stack.length) {
    const node = stack.shift();
    if (node && node.val) arr.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }

  return arr;
};


console.log(breadthFirstValues(a));