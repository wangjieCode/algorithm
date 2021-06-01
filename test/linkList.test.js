import { findLinkEnd, findLinkItemByIndex } from "../utils/linkList"
import { LinkList, ListNode } from "../链表/myLinkList"

describe("链表测试", () => {
    const link = new LinkList()
    link.root.val = 1

    link.add(new ListNode(2))
    link.add(new ListNode(3))
    link.add(new ListNode(4))
    test("添加链表元素", () => {
        expect(link.add(new ListNode(5))).toEqual({ val: 5, next: null })
        expect( () => link.add( 111 )).toThrow('传入元素不匹配')
        expect( () => link.add( { val: 5, next: null} )).toThrow('传入元素不匹配')
        expect( () => link.add( [] )).toThrow('传入元素不匹配')
    })
    test("查找链表索引元素", () => {
        expect( findLinkItemByIndex(link.root,0) ).toEqual( link.root )
    })
    test("指定索引删除链表元素", () => {
        expect( findLinkItemByIndex(link.root,1) ).toEqual( link.root.next )
        const cur = link.root.next.next
        link.remove(1)
        expect( findLinkItemByIndex(link.root,1) ).toEqual( cur )
    })

    test("查找链表最后一个元素", () => {
        expect( findLinkEnd(link.root ) ).toEqual( {val: 5, next: null})
    })

})