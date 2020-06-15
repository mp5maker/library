/* Stacks */

// functions: push, pop, peek, length

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {}
    }

    push(value) {
        this.storage[this.count] = value
        this.count++;
    }

    pop() {
        if (this.count == 0) return undefined
        this.count--;
        const result = this.storage[this.count]
        delete this.storage[this.count]
        return result;
    }

    size() {
        return this.count;
    }

    peek() {
        return this.storage[this.count - 1]
    }
}

const stack = new Stack()
/* Push */
stack.push('H')
stack.push('e')
stack.push('l')
stack.push('l')
stack.push('o')
console.log(stack.peek()) // o
console.log(stack.size()) // 5
console.log(stack.pop())  // o
console.log(stack.size()) // 4
console.log(stack.peek()) // l
console.log(stack.size()) // 4