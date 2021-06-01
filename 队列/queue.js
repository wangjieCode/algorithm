export class Queue {
    #task = []
    size = () => this.#task.length
    constructor() {

    }
    deQueue(){
        return this.#task.shift()
    }
    isEmpty(){
        return this.#task.length === 0
    }
    enQueue(ele){
        return this.#task.push(ele)
    }
}

// const q1 = new Queue();
// q1.enQueue({name: 2})
// q1.enQueue({name: 3})
// console.log( q1.size() )
// console.log( q1.size() )
