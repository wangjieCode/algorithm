// 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
// 输入：head = [1,2,6,3,4,5,6], val = 6
// 输出：[1,2,3,4,5]

import { bianli } from "../utils/linkList";
import { ListNode } from "./myLinkList";

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// export var removeElements = function(head, val) {
//     if(head === null) return head;
//     head.next = removeElements(head.next, val);
//     return head.val === val ? head.next : head;
// };

export var removeElements = function(head, val) {
    //创建一个虚拟头结点
    let dummyNode = new ListNode(val-1);
    dummyNode.next=head;
    let prev=dummyNode;
    //确保当前结点后还有结点
    while(prev.next!=null){
        if(prev.next.val==val){
            prev.next=prev.next.next;
        }else{
            prev=prev.next;
        }
    }
    return dummyNode.next;
};