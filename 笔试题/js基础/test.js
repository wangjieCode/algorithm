
var a = 2;
a = 5;
window.a = 3;

function test() {
    let a = 2;
    this.a = 10
    setTimeout(function name(params) {
        console.log(a)
    },20)
    setTimeout(function name(params) {
        console.log(this.a)
    },10)
    setTimeout((params) => {
        console.log(this.a)
    },10)
}

test()