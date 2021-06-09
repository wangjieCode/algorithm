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

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 export var getIntersectionNode2 = function (headA, headB) {
    const visited = new Set();
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};