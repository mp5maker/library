class PriorityQueue {
    constructor() {
        this.collection = []
    }

    print() {
        return this.collection
    }

    isEmpty() {
        return this.collection.length == 0
    }

    enqueue(element) {
        if (this.isEmpty()) return this.collection.push(element)
        const priority = element[1]

        let added = false;
        for (let i = 0; i < this.collection.length; i++) {
            const collectionPriority = this.collection[i][1]
            if (priority < collectionPriority) {
                this.collection.splice(i, 0, element)
                added = true
                break;
            }
        }
        if (!added) this.collection.push(element)
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
}

const pq = new PriorityQueue();
const firstArray = [
    ['Photon Khan', 2],
    ['Erfan Mahmud', 1],
    ['Samith Zaman', 3]
]
firstArray.forEach((element) => pq.enqueue(element))
console.log(pq.print())
console.log(pq.front())
console.log(pq.size())
console.log(pq.dequeue())
console.log(pq.print())