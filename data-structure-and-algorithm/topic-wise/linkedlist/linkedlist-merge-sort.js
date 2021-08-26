const LinkedList = require("./linked-list");

const mergeSort = (linkedList) => {
  const split = (linkedList) => {
    if (linkedList == null || linkedList.head == null) {
      const left = linkedList;
      const right = null;
      return { left, right };
    } else {
      const size = linkedList.size();
      const mid = Math.floor(size / 2);
      midNode = linkedList.nodeAtIndex(mid - 1);
      const left = linkedList
      const right = new LinkedList()
      right.head = midNode.next
      midNode.next = null
      return { left, right }
    }
  };

  const merge = (left, right) => {
    let merged = new LinkedList()
    merged.append(0)
    let current = merged.head
    let leftHead = left.head
    let rightHead = right.head

    while (leftHead || rightHead) {
      if (leftHead == null) {
        current.next = rightHead
        right = rightHead.next
      }
      else if (rightHead == null) {
        current.next = leftHead
        left = leftHead.next
      } else {
        leftHead = leftHead.current
        rightHead = rightHead.current
        if (left.current < right.current) {
          current.next = leftHead
          leftHead = leftHead.next
        } else {
            current.next = rightHead;
            rightHead = rightHead.next;
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

const ll = new LinkedList();
ll.append(10);
ll.append(30);
ll.append(27);
ll.append(4);

console.log('hello')
console.log("🚀 ~ file: linked-list.js ~ line 82 ~ sortedLL.print()", mergeSort(ll));