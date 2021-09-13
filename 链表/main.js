import { bianli } from "../utils/linkList";
import { deleteNode } from "./deleteLinkLIstItem";
import { ListNode } from "./myLinkList";
import { getIntersectionNode } from './leetcode160相交链表'
import { removeElements } from "./移除链表元素";

const a = new ListNode(4)
const b = new ListNode(5)
const c = new ListNode(1)
const d = new ListNode(9)

a.next = b
b.next = c
c.next = d


/**
 * 
 * @param { arruy } arr 
 */
export const mapArruyToLinklist = (arr) => {
    if( !Array.isArray(arr) || arr.length <= 0) return null
    const root = new ListNode(arr[0])
    let next = root
    for(let i = 1; i < arr.length; i ++){
        next.next = new ListNode( arr[i] )
        next = next.next 
    }
    return root
}
// 
// console.log(mapArruyToLinklist([1,2,3]))
// 节点 5 （位于单向链表 4->5->1->9 中）

const listA = [4,1,8,4,5], listB = [5,0,1,8,4,5];

const listTest = mapArruyToLinklist([1, 7,7,7, 7])

const newList = removeElements(listTest, 7)
// console.log(newList)
bianli(newList)

// console.log( getIntersectionNode( mapArruyToLinklist(listA), mapArruyToLinklist(listB) ))
