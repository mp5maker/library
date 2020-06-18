const hash = (string, max) => {
    let hashNumber = 0;
    for (let i = 0; i < string.length; i++) {
        hashNumber += string.charCodeAt(i)
    }
    return hashNumber % max
}


class HashTable {
    constructor() {
        this.storage = []
        this.storageLimit = 4
    }

    print() {
        return this.storage
    }

    add(key, value) {
        let index = hash(key, this.storageLimit)
        if (this.storage[index] == undefined) this.storage[index] = [[key, value]]
        else {
            let inserted = false
            for(let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    this.storage[index][i][1] = value
                    inserted = true
                }
            }
            if (inserted == false) this.storage[index].push([key, value])
        }
    }

    remove(key) {
        let index = hash(key, this.storageLimit)
        if (this.storage[index].length == 1 && this.storage[index][0][0] == key) delete this.storage[index]
        else {
            for(let i = 0; i < this.storage[index]; i++) {
                if (this.storage[index][i][0] == key) delete this.storage[index][i]
            }
        }
    }

    lookup(key) {
        let index = hash(key, this.storageLimit)
        if (this.storage[index] == undefined) return undefined
        else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    return this.storage[index][i][1]
                }
            }
        }
    }
}

console.log(hash('beau', 10))

let ht = new HashTable()
ht.add('beau', 'person')
ht.add('fido', 'dog')
ht.add('rex', 'dinasaur')
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print()