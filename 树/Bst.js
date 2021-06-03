class Node {
    target = null
    leftNode = null
    rightNode = null
    parent = null
    constructor(target, parent) {
        this.target = target
        this.parent = parent
    }
}

export class Bst {
    #root = null
    size = 0

    isEmpty() {
        return this.size === 0;
    }
    clear() {
        this.#root = null
    }
    add(target) {
        // 添加根节点
        if (this.#root == null) {
            this.#root = new Node(target, null)
            this.size++
            return
        }
        let node = this.#root;
        let parent = node
        let ins = 0;
        while(node != null){
            ins = this.compare(target, node.target)
            parent = node
            if(ins > 0){    
                node = node.rightNode
            } else if(ins < 0){
                node = node.leftNode
            } else {
                return
            }
        }
        const newNode = new Node(target,parent)
        if(ins > 0){
            parent.rightNode = newNode
        } else {
            parent.leftNode = newNode
        }
        this.size++
    }
    compare(e1, e2) {
        return e1 - e2
    }
    contains(target) {
        let root = this.#root
        while(root != null){
            if(root.target === target) return true;
            if(root.target > target){
                root = root.leftNode
            }else {
                root = root.rightNode
            }
        }
        return false
    }
}

const bts = new Bst()
bts.add(7)
bts.add(4)
bts.add(9)
bts.add(2)
bts.add(5)
bts.add(8)
bts.add(11)
bts.add(3)
bts.add(12)

// console.log( bts.contains(29) )
// console.log(bts)