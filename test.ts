
function countBinarySubstrings(s: string): number {
    const chs = s.split('');//字符数组
    let last = 0;//记录次数
    let ans = 0; //结果
    for (let i = 0; i < chs.length; i++) { //遍历每个字符
        let c = chs[i];//提取字符
        let count = 0;//记录次数
        while (i < chs.length && chs[i] == c) {
            count++;
            i++;//叠加
        }
        i--;//退一位
        ans += Math.min(count, last);//保存最小值
        last = count;//记录
    }
    return ans;//返回结果
};


console.log(countBinarySubstrings('0011'))