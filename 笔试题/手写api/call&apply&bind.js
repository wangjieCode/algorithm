
Function.prototype.myCall = function (...conents) {
    const fn = this;
    const _self = conents.shift()
    _self.fn = fn;
    return _self.fn(...conents)
}
Function.prototype.myApply = function (...conents) {
    context.fn = this
    let result;
    // 判断是否有第二个参数
    if(conents[1]) {
        result = context.fn(...conents[1])
    } else {
        result = context.fn()
    }
    return result
}

Function.prototype.myBind = function (_self) {
    _self.fn = this
    return (...arg) => {
        return _self.fn(...arg)
    }
}
const obj = {
    name: "obj"
}

function test(params) {
    console.log(this.name) 
    console.log(params)   
}

const newTest = test.bind(obj)
const newTest2 = test.myBind(obj)
newTest(111)
newTest2(222)