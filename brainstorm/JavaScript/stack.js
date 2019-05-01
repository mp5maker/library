class Stack {
    constructor() {
        this.stackList = [];
    }

    add(value) {
        this.stackList.push(value);
    }

    peek() {
        let copyOfStackList = [...this.stackList];
        return copyOfStackList.pop();
    }

    pop() {
        return this.stackList.pop();
    }

    getStack() {
        return {
            stack: this.stackList
        }
    }
}

let stack = new Stack();
stack.add(4)
stack.add(5)
stack.add(6)
console.log(stack.getStack())

console.log(stack.peek())
console.log(stack.getStack())

console.log(stack.pop())
console.log(stack.getStack())