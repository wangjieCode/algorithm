function myNew(Func, ...args) {
    const instance = {};
    if (Func.prototype) {
        // instance.__proto__ = Func.prototype // 不推荐直接操作隐式原型
        Object.setPrototypeOf(instance, Func.prototype)
    }
    const res = Func.call(instance, ...args)
    if (typeof res === "function" || (typeof res === "object" && res !== null)) {
        return res
    }
    return instance
}
// 测试
function Person(name) {
    this.name = name
}
Person.prototype.sayName = function () {
    console.log(`My name is ${this.name}`)
}
const me = myNew(Person, 'WangJie')
me.sayName()
console.log(me)
