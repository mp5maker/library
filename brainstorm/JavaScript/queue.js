class Queue {
    constructor() {
        this.queue = [];
    }

    add(value) {
        this.queue.push(value);
    }

    peek() {
        let copyOfQueue = [...this.queue];
        return copyOfQueue.shift();
    }

    remove() {
        return this.queue.shift();
    }

    getQueue() {
        return {
            queue: this.queue
        }
    }
}

let queue = new Queue();
queue.add(4)
queue.add(5)
queue.add(6)
console.log(queue.getQueue())

console.log(queue.peek())
console.log(queue.getQueue())

console.log(queue.remove())
console.log(queue.getQueue())