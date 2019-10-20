function ListNode(x){
    this.val = x;
    this.next = null;
}
const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
a.next = b;
b.next = c;
function printListFromTailToHead(head) {
    let tempHead = head;
    const arr = [];
    while (tempHead != null){
        arr.push(tempHead.val);
        tempHead = tempHead.next;
    }
    return arr.reverse();
}
console.log(printListFromTailToHead(a))