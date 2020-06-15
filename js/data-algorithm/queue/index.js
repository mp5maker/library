class Queue {
    constructor() {
        this.collection = []
    }

    print() {
        return this.collection.reverse()
    }

    enqueue(element) {
        this.collection.push(element)
    }

    dequeue(element) {
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

const queue = new Queue()
const firstArray = [1, 2, 3, 4, 5]
firstArray.forEach((element) => queue.enqueue(element))
console.log(queue.dequeue())
console.log(queue.front())
console.log(queue.size())
console.log(queue.isEmpty())
console.log(queue.print())