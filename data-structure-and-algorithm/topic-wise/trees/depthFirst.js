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
  if (root == null) return [];
  let result = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    result.push(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return result
};

const _depthFirst = (root) => {
  let current = root
  let arr = []

  const __depthFirst = (node) => {
    if (node && node.val) arr.push(node.val)
    else return

    depthFirst(node.left)
    depthFirst(node.right)

    return
  }

  __depthFirst(current)
  return arr
}

console.log(depthFirst(a));
