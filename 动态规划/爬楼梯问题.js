/**
 * @param {number} n
 * @return {number}
 */
export var climbStairs = function (n) {
    const dp = { '1': 1, "2": 2 }
    return (() => {
        if (dp[n]) {
            console.log(dp[n])
            return dp[n]
        }
        if (n <= 0) return 0
        console.log(climbStairs(n - 1) + climbStairs(n - 2))
        dp[n] = climbStairs(n - 1) + climbStairs(n - 2)
    })()
};

export function jump(n) {
    if (n <= 0) return -1;
    if (n == 1) return 1;
    if (n == 2) return 2;
    return jump(n - 1) + jump(n - 2);
}