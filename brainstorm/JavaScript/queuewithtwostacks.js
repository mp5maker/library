class QueuesWithTwoStack {
    constructor() {
        this.stackNewestOnTop = [];
        this.stackOldestOnTop = [];
    }

    shiftDataFromNewToOld() {
        if (this.stackOldestOnTop.length == 0) {
            while (!this.stackNewestOnTop.length == 0) {
                this.stackOldestOnTop.push(this.stackNewestOnTop.pop())
            }
        }
    }

    enqueue(value) {
        this.stackNewestOnTop.push(value);
    }

    peek() {
        this.shiftDataFromNewToOld();
        let stackOldestOnTopCopy = [...this.stackOldestOnTop];
        return stackOldestOnTopCopy.pop();
    }

    dequeue() {
        this.shiftDataFromNewToOld();
        return this.stackOldestOnTop.pop();
    }

    getStackData() {
        return {
            new: this.stackNewestOnTop,
            old: this.stackOldestOnTop
        }
    }
}

let stackQueues = new QueuesWithTwoStack();
stackQueues.enqueue(4);
stackQueues.enqueue(5);
stackQueues.enqueue(6);
console.log(stackQueues.getStackData())

console.log(stackQueues.peek())
console.log(stackQueues.getStackData())

console.log(stackQueues.dequeue())
console.log(stackQueues.getStackData())
