class CustomSet {
    constructor() {
        this.collection = []
    }

    has(element) {
        return this.collection.includes(element)
    }

    values() {
        return this.collection
    }

    add(element) {
        if (!this.has(element)) {
            this.collection.push(element)
            return true
        }
        return false
    }

    remove(element) {
        if (this.has(element)) {
            let index = this.collection.indexOf(element)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }

    size() {
        return this.collection.length
    }

    union(otherSet) {
        let unionSet = new CustomSet();

        const firstSet = this.values()
        const secondSet = otherSet.values()

        firstSet.forEach((element) => unionSet.add(element))
        secondSet.forEach((element) => unionSet.add(element))

        return unionSet
    }

    intersection(otherSet) {
        let intersectionSet = new CustomSet()

        const firstSet = this.values()

        firstSet.forEach((element) => {
            if (otherSet.has(element)) intersectionSet.add(element)
        })

        return intersectionSet
    }

    difference(otherSet) {
        let differenceSet = new CustomSet()

        const firstSet = this.values()

        firstSet.forEach((element) => {
            if (!otherSet.has(element)) differenceSet.add(element)
        })

        return differenceSet
    }

    subset(otherSet) {
        const firstSet = this.values()
        return firstSet.every((element) => otherSet.has(element))
    }
}

const firstArray = [1, 2, 3, 4, 5]
const secondArray = [2, 4, 5, 6, 7]
// const secondArray = [1, 2, 3, 4, 5, 6]

const firstSet = new CustomSet()
firstArray.forEach((element) => firstSet.add(element))
console.log(firstSet.values())
console.log(firstSet.size())

const secondSet = new CustomSet()
secondArray.forEach((element) => secondSet.add(element))
console.log(secondSet.values())
console.log(secondSet.size())
console.log(secondSet.remove(7))
console.log(secondSet.values())

console.log(firstSet.union(secondSet))
console.log(firstSet.intersection(secondSet))
console.log(firstSet.difference(secondSet))
console.log(firstSet.subset(secondSet))