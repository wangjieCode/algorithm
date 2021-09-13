console.log({}+[]); // [Object Object] 会调用toString方法
{}+[];//[object Object]
[]+{};   //[object Object]
{} + {};  // "[object Object][object Object]"
console.log([] == false)  // true
console.log({} == false)  // false
if([]){
    console.log([] == false) 
}
// ???? 为什么在if语句中[]为true
("b" + "a" + + "a" + "a").toLocaleLowerCase(); 
0 == "0"
Boolean("0") == Boolean(0) // true
console.log(NaN == 0); // false
console.log(NaN <= 0); // 
console.log(null <= 0); 
console.log(1 + null); 
var a ={value:1};
var b ={value:2}; 
console.log(a<=b);
var obj={};
var x = +obj.yideng?.name ?? 'test'; 
console.log(x);
var test="test"; 
console.log(typeof test);  // true
console.log(test instanceof String); // true ???

Promise.resolve().then(() => {
    console.log(11); 
})
    .then(() => { 
        console.log(12);
    })
    .then(() => {
        console.log(0);
        return Promise.resolve(5); })
    .then((r) => { 
        console.log('🐻 ', r);
    });