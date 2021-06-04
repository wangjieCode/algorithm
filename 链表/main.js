import { bianli } from "../utils/linkList";
import { deleteNode } from "./deleteLinkLIstItem";
import { ListNode } from "./myLinkList";

const a =  new ListNode(4)
const b =  new ListNode(5)
const c =  new ListNode(1)
const d =  new ListNode(9)

a.next = b
b.next = c
c.next = d

bianli(a)
deleteNode(b)
bianli(a)

// 节点 5 （位于单向链表 4->5->1->9 中）

