class LinkedList {
    constructor() {
        this.head = null;
    }

    insertNodeAtTail(val) {
        var node = {
            data: val,
            next: null
        }
        if (!this.head) {
            this.head = node;
        } else {
            let p1 = this.head;
            while(p1.next) {
                p1 = p1.next;
            }
            p1.next = node;
        }
    }

    getHead() {
        return this.head;
    }
}

var linkedList = new LinkedList();
[5, 6, 7, 8].forEach((value) => {
    linkedList.insertNodeAtTail(value);
    console.log(linkedList.getHead())
})