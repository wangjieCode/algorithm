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
// console.log(runningSum([1, 2, 3, 4]))


/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
export var numJewelsInStones = function (jewels = "ebd", stones = "bbb") {
    const res = stones.match(new RegExp(jewels.split("").join("+|") + "+", "g"))
    console.log(res)
    if (res == null) return 0
    let num = 0;
    res.forEach(ele => {
        num += ele.length
    })
    return num
};

/**
 * @param {number[][]} accounts
 * @return {number}
 */
export var maximumWealth = function (accounts = [[1, 2, 3], [3, 2, 1]]) {
    let res = 0;
    for (let i = 0; i < accounts.length; i++) {
        let temp = 0
        for (let j = 0; j < accounts[i].length; j++) {
            temp += accounts[i][j];
        }
        res = Math.max(temp, res)
    }
    return res
};

// 给你一个整数数组 nums 。

// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

// 返回好数对的数目。

//  输入：nums = [1,2,3,1,1,3]
// 输出：4
// 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
/**
 * @param {number[]} nums
 * @return {number}
 */
export var numIdenticalPairs = function (nums = [1, 2, 3, 1, 1, 3]) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                res++
            }
        }
    }
    return res
};

// 给你一个二进制字符串 s 。如果字符串中由 1 组成的 最长 连续子字符串 严格长于 由 0 组成的 最长 连续子字符串，返回 true ；否则，返回 false 。

// 例如，s = "110100010" 中，由 1 组成的最长连续子字符串的长度是 2 ，由 0 组成的最长连续子字符串的长度是 3 。
// 注意，如果字符串中不存在 0 ，此时认为由 0 组成的最长连续子字符串的长度是 0 。字符串中不存在 1 的情况也适用此规则。

/**
 * @param {string} s
 * @return {boolean}
 */
export var checkZeroOnes = function (s = "1") {
    const one = s.match(/1+/g) || []
    const o = s.match(/0+/g) || []
    let onelen = 0, olen = 0;
    one.forEach(ele => ele.length > onelen ? onelen = ele.length : null)
    o.forEach(ele => ele.length > olen ? olen = ele.length : null)
    if (onelen > olen) {
        return true
    }
    return false
};
// 图解字节&拼多多&leetcode14：最长公共前缀
// 输入: ["flower","flow","flight"]
// 输出: "fl"
/**
 * 
 * @param { string[] } strs 
 */
const findMaxLength = (strs) => {
    if (!strs || strs.length === 0) return strs;
    let firstStr = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        for (; j < firstStr.length && j < strs[i].length; j++) {
            if (firstStr[j] !== strs[i][j]) break
        }
        firstStr = firstStr.substr(0, j)
    }
    return firstStr
}
/**151. 翻转字符串里的单词
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    if( !s || s.length === 0) return '';
    return s.trim().split(' ').filter( ele => ele !== '' ).reverse().join(" ")
};
// console.log(findMaxLength(["flower", "flow", "flight"]))

console.log(reverseWords("a good   example") )