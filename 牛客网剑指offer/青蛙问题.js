function jumpFloor(number)
{
    if(number <= 0) return ;
    if(number == 1) return 1;
    if(number == 2) return 2;
    return  jumpFloor(number-1) + jumpFloor(number-2)
}
// console.log(jumpFloor(10))
function jumpFloorS(number)
{
    if(number <= 0) return ;
    if(number == 1) return 1;
    if(number == 2) return 2;
    let result = 0;
    for (let i = 1; i < number; i ++){
        result += jumpFloorS(number-i)
    }
    return  result + 1;
}
// console.log(jumpFloorS(3))
/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * @param number
 */
function rectCover(number)
{
    if(number == 0) return 0;
    if(number <= 1){
        return 1
    } else if(number <= 2 ) {
        return 2;
    }else {
        return rectCover(number-1) + rectCover(number -2);
    }
}