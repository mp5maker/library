class CustomSet {
    constructor() {
        this.collection = []
    }

    values() {
        return this.collection
    }

    has(element) {
        return this.collection.includes(element)
    }

    add(element) {
        if (this.has(element)) return false
        else {
            this.collection.push(element)
            return true
        }
    }

    remove(element) {
        if (this.has(element)) {
            const index = this.collection.indexOf(element)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }

    size() {
        return this.collection.length
    }

    union(otherSet) {
        const unionSet = new CustomSet()
        const firstSet = this.values()
        const secondSet = otherSet.values()

        firstSet.forEach((element) => unionSet.add(element))
        secondSet.forEach((element) => unionSet.add(element))

        return unionSet
    }

    intersection(otherSet) {
        const intersectionSet = new CustomSet()
        const firstSet = this.values()
        const secondSet = otherSet

        firstSet.forEach((element) => {
            if (secondSet.has(element)) intersectionSet.add(element)
        })

        return intersectionSet
    }

    difference(otherSet) {
        const differenceSet = new CustomSet();
        const firstSet = this.values()
        const secondSet = otherSet

        firstSet.forEach((element) => {
            if (!secondSet.has(element)) differenceSet.add(element)
        })

        return differenceSet
    }

    subset(otherSet) {
        const firstSet = this.values()
        const secondSet = otherSet

        return firstSet.every((element) => secondSet.has(element))
    }
}

const setA = new CustomSet()
const setB = new CustomSet()
setA.add('a');
setB.add('a');
setB.add('b');
setB.add('c');
setB.add('d');

console.log(setA.union(setB))
console.log(setA.intersection(setB))
console.log(setA.difference(setB))
console.log(setB.difference(setA))
console.log(setA.subset(setB))

setB.remove('d');
console.log(setB.values())