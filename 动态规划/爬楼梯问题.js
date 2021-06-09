/**
 * @param {number} n
 * @return {number}
 */
export var climbStairs = function (n) {
    const dp = { '1': 1, "2": 2 };
    const compox = (n) => {
        if (dp[n]) {
            return dp[n]
        }
        if (n <= 0) return 0
        dp[n] = compox(n - 1) + compox(n - 2)
        return dp[n]
    }
    return compox(n)
};

export function jump(n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;
    return jump(n - 1) + jump(n - 2);
}