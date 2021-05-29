function ListNode(val) {
    this.val = val;
    this.next = null;
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(4)
a.next = b
b.next = c

c.next = a;

console.log( isCircularLinkList(a) )

const d = new ListNode(1)
const e = new ListNode(3)
const f = new ListNode(4)
d.next = e
e.next = f

function bianli(root, vals = []) {
    while (root && root !== null) {
        vals.push(root.val)
        root = root.next
    }
    return vals
}
// bianli(a)
// bianli(d)


// console.log(bianli(mergeTwoLists3(a, d)))

import './链表/myLinkList.js'
import { isCircularLinkList } from './utils/linkList.js';
