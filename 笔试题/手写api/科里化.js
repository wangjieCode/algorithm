
function curry(fn, args = []) {
    var length = fn.length;
    var args = args || [];
    return function(...arg){
        const newArgs = [ ...args, ...arg];
        if (newArgs.length < length) {
            return curry(fn,newArgs);
        }else{
            return fn(...newArgs);
        }
    }
}


let curryTest = curry((a, b, c, d) => {
    return a+b+c+d
},[2])
// console.log( curryTest(1, 2, 3)(4) )//返回10
console.log( curryTest(1, 2)(4) )//返回10
// console.log(  curryTest(1, 2)(3, 4) )//返回10
