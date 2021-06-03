// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。
// 请定义一个函数实现字符串左旋转操作的功能。
// 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
var reverseLeftWords = function (s, n) {
    const newEnd = s.slice(0, n)
    let res = ''
    for (let i = newEnd.length; i < s.length; i++) {
        res += s[i]
    }
    return res + newEnd
};
// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。

//  

// 示例 1：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    const dp = []
    for (let i = 0; i < nums.length; i++) {
        let res = 0
        for (j = 0; j <= i; j++) {
            res += nums[j]
        }
        dp.push(res)
    }
    return dp
};
var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
};
// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。

// 示例 1：

// 输入：[4,2,1]

// 输出：4

// 解释：第一堆力扣币最少需要拿 2 次，第二堆最少需要拿 1 次，第三堆最少需要拿 1 次，总共 4 次即可拿完。
/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
    
};
console.log(runningSum([1, 2, 3, 4]))