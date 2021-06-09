/**旋转数组最小值
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let minValue = numbers[0];
    for(let i = 1; i <numbers.length; i ++){
        if(minValue > numbers[i]){
            return numbers[i]
        }
    }
    return i
};

console.log( minArray([2,2,2,0,1] ))