import { Queue } from "../队列/queue"


describe("测试队列class", () => {
    const queue = new Queue()
    test('基本入队出队', () => {
        // console.log( queue.enQueue({name: 1}))
        expect( queue.enQueue({name: 1}) ).toBe(1)
        expect( queue.size() ).toBe( 1 )
        queue.deQueue()
        expect( queue.size() ).toBe( 0 )
    })
})