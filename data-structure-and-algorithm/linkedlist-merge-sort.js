const LinkedList = require("./linked-list");

const ll = new LinkedList();
ll.append(10);
ll.append(30);
ll.append(27);
ll.append(4);

const mergeSort = (linkedList) => {
  const split = (linkedList) => {
    if (linkedList == null || linkedList.head == null) {
      left = linkedList;
      right = null;
      return { left, right };
    } else {
      const size = linkedList.size();
      const mid = Math.floor(size / 2);
      midNode = linkedList.node_at_index(mid - 1);
      left = linkedList
      right = new LinkedList()
      right.head = midNode.next
      midNode.next = null
      return { left, right }
    }
  };

  const merge = (left, right) => {
    const merged = new LinkedLis()
    merged.add(0)
    const current = merged.head
    const left = left.head
    const right = right.head

    while (left || right) {
      if (left.head == null) {
        current.next = right
        right = right.next
      }
      else if (right.head == null) {
        current.next = left
        left = left.next
      } else {
        left = left.current
        right = right.current
        if (left < right) {
          current.next = left
          left = left.next
        }
        if (right > left) {
          current.next = right
          right = right.next
        }
      }
    }

    current = current.next
    const head = merged.head.next
    merged.head = head
    return merged
  };

  if (linkedList.size() == 1) return linkedList;
  else if (linkedList.head == null) return linkedList;

  const { left, right } = split(linkedList);
  const _left = mergeSort(left);
  const _right = mergeSort(right);
  return merge(_left, _right);
};


const sortedLL = mergeSort(ll)
console.log("🚀 ~ file: linked-list.js ~ line 82 ~ sortedLL.print()", sortedLL.print());
console.log("🚀 ~ file: linked-list.js ~ line 80 ~ sortedLL.size()", sortedLL.size());