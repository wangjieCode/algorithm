export const cuttingRope = (n) => {
    const dp = [];
    dp[0] = dp[1] = dp[2] = 1;
    for (let i = 2; i <= n ; i++) {
        for (let j = i; j < i + 1; j++) {
            console.log( i , dp[i], j)
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n];
}

/**
 * @param {number[]} staple
 * @param {number[]} drinks
 * @param {number} x
 * @return {number}
 */
export var breakfastNumber = function(staple, drinks, x) {
    let num = 0;
    for(let i = 0; i < staple.length; i ++){
        const stapleItem = staple[i];
        if(stapleItem > x) break
        for(let j = 0; j < drinks.length; j ++){
            const res = stapleItem + drinks[j];
            if(res <= x) num++
        }
    }
    return num % 1000000007
};