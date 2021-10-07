class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  recursiveAppend(val) {
    const recursive = (current, node) => {
      if (!current.next) {
        current.next = node;
        return this.head;
      }
      return recursive(current.next, node);
    };

    let current = this.head;
    let node = new Node(val);
    if (this.head == null) {
      this.head = node;
      return this.head;
    }

    return recursive(current, node);
  }

  recursivePrint() {
    const recursive = (node, arr = []) => {
      arr.push(node.val);
      if (!node.next) return arr;
      return recursive(node.next, arr);
    };

    let current = this.head;
    return recursive(current).join("->");
  }

  recursiveContains(value) {
    const recursive = (node, val) => {
      if (node.val == val) return true;
      if (!node.next) return false;
      return recursive(node.next, val);
    };

    let current = this.head;
    return recursive(current, value);
  }

  append(val) {
    const node = new Node(val);
    if (this.head == null) {
      this.head = node;
      return this.head;
    }

    let current = this.head;
    let previous = null;
    while (current) {
      previous = current;
      current = current.next;
    }
    previous.next = node;
    return this.head;
  }

  prepend(val) {
    const node = new Node(val);
    const current = this.head;
    this.head = node;
    this.head.next = current;
    return this.head;
  }

  print() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr.join("->");
  }

  contains(val) {
    let current = this.head;

    while (current) {
      if (current.val == val) return true;
      current = current.next;
    }

    return false;
  }

  sumList() {
    let sum = 0;
    let current = this.head;

    while (current) {
      sum += current.val;
      current = current.next;
    }

    return sum;
  }

  recursiveSumList() {
    const recursive = (node, sum = 0) => {
      sum += node.val;
      if (!node.next) return sum;
      return recursive(node.next, sum);
    };

    let current = this.head;
    return recursive(current);
  }

  deleteValue(val) {
    let current = this.head;
    if (current == null) return this.head;

    if (current.val == val) {
      this.head = current.next;
      return this.head;
    }

    let prev = null;
    while (current) {
      if (current.val == val) break;
      prev = current;
      current = current.next;
    }
    prev.next = current && current.next ? current.next : null;

    return this.head;
  }

  recursiveDeleteValue(value) {
    let current = this.head

    const recursive = (current, val, prev = null) => {
      if (!current || !current.next) return this.head
      if (current.val == val) {
        if (prev) {
          prev.next = current && current.next ? current.next : null;
        } else {
          this.head = current.next
        }
        return this.head
      }
      return recursive(current.next, val, current)
    }

    return recursive(current, value)
  }

  hasCycle() {}
}

const ll = new LinkedList();
ll.append(23);
ll.append(5);
ll.append(11);
ll.append(12);
ll.prepend(100);
console.log("contains", ll.contains(20));
console.log("contains", ll.contains(11));
ll.recursiveAppend(200);
console.log(ll.print());
console.log(ll.recursivePrint());
console.log("recursiveContains", ll.recursiveContains(11));
console.log("recursiveContains", ll.recursiveContains(15));
console.log("sumList", ll.sumList());
console.log("recursiveSumList", ll.recursiveSumList());
console.log("deleteValue", ll.deleteValue(100));
console.log("deleteValue", ll.recursiveDeleteValue(5));
