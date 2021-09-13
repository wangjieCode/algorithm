// import './树/Bst'

// import './链表/main'

// import './string/main'

// import './动态规划/main'

// import './数组/main'

// import './查找/main'

(function(target){
    console.log(target)
    const result = [];
    let start = 1;
    let end = 2;
    let sum = start + end;
    while (start != end && end <= target) {
        if(sum === target){
            result.push( getSubSequence(start, end) )
            ++b;
            sum += b;
        } else if(sum > target){
            sum -= start;
            ++start
        } else {
            ++end;
            // sum += 
        }
    }
    return result;
})

function getSubSequence(start, end){
    const res = [];
    for (let i = start; i < end; i++){
        res.push(i)
    }
    return res;
}

//动态规划最大和子序列
var maxSubArray = function(nums) {
    // let ans = nums[0];
    // let sum = 0;
    // for (let i = 1; i < nums.length; i++) {
    //     if(sum > 0){
    //         sum += nums[i];
    //     } else {
    //         sum = nums[i];
    //     }
    //     ans = Math.max(ans, sum);
    // }
    // return ans
    const dp = [];
    dp[0] = nums[0];
    let max = nums[0];
    for (let i = 1; i< nums.length; i++) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
        max = Math.max(max, dp[i]);
    }
    return max;
};

// console.log( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) )
function isFlag (str) {
    const n = str.length - 1;
    for (let i = 0; i < n / 2; i++) {
        if(str[i] !== str[n - i]){
            return false;
        }
    }
    return true
}

function longestPalindrome(str){
    let res = '';
    for (let i = 0; i < str.length; i ++){
        for (let j = i + 1; j < str.length + 1; j++){
            const s = str.substring(i, j);
            if(s.length < res.length) continue;
            if(isFlag(s) ){
                res = s;
            }
        }
    }
    return res
}

// console.log( longestPalindrome("aacabdkacaa"))
const dp = [];

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0) return 0;
    if( n === 1 ) return 1;
    if(fib.dp[n]) return fib.dp[n];
    fib.dp[n] = fib(n - 1) + fib(n - 2);
    return fib.dp[n];
};
fib.dp = [];

var tribonacci = function(n) {
    if(n === 0) return 0;
    if( n === 1 ) return 1;
    if( n === 2 ) return 1;
    if(tribonacci.dp[n]) return tribonacci.dp[n];
    tribonacci.dp[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
    return tribonacci.dp[n];
};
tribonacci.dp = [];

console.time()
console.log( tribonacci(4) )
console.timeEnd()