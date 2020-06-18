class Node {
    constructor(data, left = null, right = null) {
        this.data = data,
        this.left = left;
        this.right = right;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    print() {
        return this.root
    }

    add(data) {
        const node = this.root;

        const searchTree = (point) => {
            if (data < point.data) {
                if (point.left == null) return point.left = new Node(data)
                else if (point.left !== null) return searchTree(point.left)
            } else if (data > point.data) {
                if (point.right == null) return point.right = new Node(data)
                else if (point.right !== null) return searchTree(point.right)
            } else return null
        }

        if (node == null) return this.root = new Node(data)
        else return searchTree(node)
    }

    findMin() {
        let current = this.root
        while (current.left !== null) {
            current = current.left
        }
        return current.data
    }

    findMax() {
        let current = this.root
        while (current.right !== null) {
            current = current.right
        }
        return current.data
    }

    find(data) {
        let current = this.root
        while (current) {
            if (data == current.data) return current.data
            if (data < current.data) current = current.left
            if (data > current.data) current = current.right
        }
        return current
    }

    isPresent(data) {
        let current = this.root
        while(current) {
            if (data == current.data) return true
            if (data < current.data) current = current.left
            if (data > current.data) current = current.right
        }
        return false
    }

    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) return null
            if (data == node.data) {
                if (node.left == null && node.right == null) return null
                if (node.left == null ) return node.right
                if (node.right == null) return node.left

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)
                return node
            } else if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else if (data > node.data) {
                node.right = removeNode(node.right, data)
                return node
            }
        }
        this.root = removeNode(this.root, data)
    }

    findMinHeight(node = this.root) {
        console.log('i run')
        if (node == null) return -1
        let left = this.findMinHeight(node.left)
        let right = this.findMinHeight(node.right)
        console.log("BinarySearchTree -> findMinHeight -> left", left)
        console.log("BinarySearchTree -> findMinHeight -> right", right)

        if (left < right) return left + 1
        else return right + 1
    }

    findMaxHeight(node = this.root) {
        if (node == null) return -1
        let left = this.findMaxHeight(node.left)
        let right = this.findMaxHeight(node.right)

        if (left > right) return left + 1
        else return right + 1
    }

    isBalanced() {
        return this.findMinHeight() >= this.findMaxHeight() - 1
    }

    inOrder() {
        if (this.root == null) return null
        else {
            let result = []

            const traverseInOrder = (node) => {
                node.left && traverseInOrder(node.left);
                result.push(node.data)
                node.right && traverseInOrder(node.right)
            }

            traverseInOrder(this.root)

            return result
        }
    }

    preOrder() {
        if (this.root == null) return null
        else {
            let result = []

            const traverseInOrder = (node) => {
                result.push(node.data)
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right)
            }

            traverseInOrder(this.root)

            return result
        }
    }

    postOrder() {
        if (this.root == null) return null
        else {
            let result = []

            const traverseInOrder = (node) => {
                result.push(node.data)
                node.left && traverseInOrder(node.left);
                node.right && traverseInOrder(node.right)
            }

            traverseInOrder(this.root)

            return result
        }
    }
}

const bst = new BinarySearchTree()
bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)
// bst.remove(4)
// console.log(bst.print())
// console.log(bst.findMin())
// bst.remove(7)
// console.log(bst.findMax())
// console.log(bst.find(5))
// console.log(bst.isPresent(5))
console.log(bst.findMinHeight())
// console.log(bst.findMaxHeight())
// console.log(bst.isBalanced())