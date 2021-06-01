import { bianli, findLinkEnd, findLinkItemByIndex } from "../utils/linkList.js"

export class ListNode {
    val = null
    next = null
    constructor(val = null) {
        this.val = val
    }
}

export class LinkList {
    root = null
    constructor(root) {
        if (root instanceof ListNode) {
            this.root = root
        } else {
            this.root = new ListNode()
        }
    }
    add(item) {
        if (item instanceof ListNode) {
            const rootEnd = findLinkEnd(this.root)
            rootEnd.next = item
            return rootEnd.next
        }
        throw new Error("传入元素不匹配")
    }
    remove(index) {
        if(typeof index !== "number") throw new Error("类型错误")
        const curr = findLinkItemByIndex(this.root, index - 1);
        if(curr == null || curr.next == null ){
            console.log("长度越界")
            return
        }
        const newNext = curr.next.next;
        curr.next = newNext
    }
}


