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

const depthFirst = (root) => {
  let stack = [root];
  let arr = [];

  while (stack.length) {
    let node = stack.pop();
    if (node) {
      if (node.val) arr.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  }

  return arr;
};

console.log(depthFirst(a)); // [ 'a', 'c', 'e', 'b', 'd', 'f' ]