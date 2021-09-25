const zipperLists = (head1, head2) => {
  let counter = 0;
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;

  while (current1 && current2) {
    if (counter % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    counter++;
  }

  tail.next = current1 || current2;
  return head1;
};

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

console.log(zipperLists(a, x));
// a -> x -> b -> y -> c -> z
