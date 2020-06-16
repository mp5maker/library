class Queue {
    constructor() {
        this.collection = []
    }

    print() {
        return this.collection
    }

    enqueue(element) {
        this.collection.push(element)
    }

    dequeue() {
        return this.collection.shift()
    }

    front() {
        return this.collection[0]
    }

    size() {
        return this.collection.length
    }

    isEmpty() {
        return this.collection.length == 0
    }
}

const q = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
console.log(q.print())
console.log(q.dequeue())
console.log(q.front())
console.log(q.print())

