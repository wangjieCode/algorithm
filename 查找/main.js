/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((right + left) / 2);
        const midValue = nums[mid];
        if(midValue > target){
            right = mid - 1;
        } else if ( midValue < target){
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};

// console.log(search([-1], -1));
// 输入一个正整数target，输出所有和为target的连续正整数的序列，
const test = () => {

}