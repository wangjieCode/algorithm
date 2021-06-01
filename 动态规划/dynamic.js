// 有3种硬币面值分别为 2， 5,7
// 给定目标27，求使用最少的组合搭配出27
// 7 7 7 + 2 2 2 ==》 6

const dp = {}
const findMinNums = (x) => {
    if (dp[x]) return dp[x]
    if (x <= 0) return x;
    let res = Number.MAX_VALUE;
    if (x >= 2) {
        res = Math.min(res, findMinNums(x - 2) + 1)
    }
    if (x >= 5) {
        res = Math.min(res, findMinNums(x - 5) + 1)
    }
    if (x >= 7) {
        res = Math.min(res, findMinNums(x - 7) + 1)
    }
    dp[x] = res
    return res
}
const findMinNums2 = (A, x) => {
    const dp = [];
    dp[0] = 0;
    for(let i = 1; i < x; i ++){
        dp[i] = Number.MAX_VALUE
        for(let j = 0; j < A.length; j ++){
            if( i < A[j] ||  dp[ i - A[j] ] == Number.MAX_VALUE) continue;
            dp[i] = Math.min(dp[i], dp[ i - A[j] ] + 1)
        }
    }
    return dp[x - 1 ]
}

function test(m, n) {
    const dp = [];
    dp[0] = [1];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; i++) {
            if (i === 0 || j === 0) {
                console.log(dp[i],i,j)
                dp[i][j] = 1;
            }
            else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1]
}
console.time()
console.log(findMinNums2([2,5,7],27))
console.timeEnd()
