class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const current = this.root;
    const node = new Node(val);
    if (current == null) this.root = node;

    let requiredNode = null;
    while (current) {
      requiredNode = current;
      current = current.next;
    }

    requiredNode = node;
    return this.root;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const readableFormat = (head) => {
  let current = head;
  let values = [];

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  return values;
};

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

console.log(readableFormat(reverseList(a)).join('->')); // f -> e -> d -> c -> b -> a
