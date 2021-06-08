import { mapArruyToLinklist } from "./main";

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export var getIntersectionNode = function (headA, headB) {
    while(headA){
        headA.flag = true
        headA = headA.next
    }
    while(headB){
        if(headB.flag) return headB;
        headB = headB.next
    }
    return null
};
