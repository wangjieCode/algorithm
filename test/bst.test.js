import { Bst } from "../树/Bst"


describe("二叉搜索树", () => {
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
    test("是否包含某个元素", () => {
        expect( bts.contains(1) ).toBe(false)
        expect( bts.contains(1) ).toBe(false)
        expect( bts.contains(5) ).toBe(true)
        expect( bts.contains(3) ).toBe(true)
    })
    test("清空搜索树", () => {
        bts.clear()
        expect( bts.contains(7) ).toBe(false)
        expect( bts.contains(5) ).toBe(false)
        expect( bts.contains(3) ).toBe(false)
    })
})