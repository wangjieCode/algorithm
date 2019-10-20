function Fibonacci(n)
{
    let res = 0;
    let prev = 0;
    let next = 1;
    for (let i = 0; i <= n; i++) {
        res = prev + res;
        prev = next;
        next = res;
    }
    return res;
}
console.log(Fibonacci(3));