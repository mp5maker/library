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
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

const breadthFirstValues = (root) => {
  let queue = [root]
  let arr = []

  while(queue.length) {
    let node = queue.shift()
    if (node) {
      if (node.val) arr.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return arr
};


console.log(breadthFirstValues(a)); // [ 'a', 'c', 'b', 'e', 'd', 'f' ]