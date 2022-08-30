


const map = {
    '2': "abc",
    '3': "def",
    '4': "ghi",
    '5': "jkl",
    '6': "mno",
    '7': "pqrs",
    '8': "tuv",
    '9': "wxyz",
}


// function letterCombinations(digits: string): string[] {
//     const len = digits.length;
//     const originArr = digits.split('').reduce((pre, cur) => {
//         pre.push(...map[cur]);
//         return pre
//     }, [] as string[])
//     const res: string[] = [];
//     dfs('',originArr, len, res);
//     return res
// };


// function dfs(cur, originArr: string[], len: number, res: string[] = []) {
//     if(len === 0) {
//         res.push(cur);
//         return 
//     };
//     for(let i = 0; i < originArr.length; i++) {
//         dfs(cur + originArr[i], originArr.slice(i + 3), len - 1, res)
//     }
// }


function letterCombinations(digits: string): string[] {
    if(digits.length == 0) return [];
    const res: string[] = [];
    dfs('', digits, res);
    return res
};




function dfs(cur: string,digits, res: string[]= []) {
    if(digits.length == 0) res.push(cur);//已经遍历完字符串中所有数字，得到的字母组合是完整的
    else {
        const str = map[digits[0]];//每次取第一个数字
        for(let i = 0; i < str.length; i++) {//遍历当前按键的所有字母，遍历完后面的按键会回溯到当前按键的下一个字母
            dfs(cur + str[i],digits.slice(1), res);//带着当前字母组合去找下一个按键对应的字母
        }
    } 
}

console.log(letterCombinations("23"))

// ["ab","ac","ad","ae","af","bc","bd","be","bf","cd","ce","cf","de","df","ef"]
// 预期结果：
// ["ad","ae","af","bd","be","bf","cd","ce","cf"]
