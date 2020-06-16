class Priority {
    constructor() {
        this.collection = []
    }

    print() {
        return this.collection
    }

    empty() {
        return this.collection.length == 0
    }

    size() {
        return this.collection.length
    }

    enqueue(element) {
        if (this.empty()) {
            this.collection.push(element)
        } else {
            let added = false
            const elementQueue = element[1]
            for (let i = 0; i < this.size(); i++) {
                const collectionQueue = this.collection[i][1]
                if (elementQueue < collectionQueue) {
                    this.collection.splice(i, 0, element)
                    added = true
                }
            }
            if (!added) this.collection.push(element)
        }
    }

    dequeue() {
        return this.collection.shift()
    }

    front() {
        return this.collection[0]
    }
}