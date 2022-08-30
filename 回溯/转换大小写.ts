// 给定一个字符串 s ，通过将字符串 s 中的每个字母转变大小写，我们可以获得一个新的字符串。

// 返回 所有可能得到的字符串集合 。以 任意顺序 返回输出。

// 输入：s = "a1b2"
// 输出：["a1b2", "a1B2", "A1b2", "A1B2"]
/**
 * 反转字母大小写
 */
 const changeLetter = function (s: String): String {
    return s >= 'a' && s <= 'z' ? s.toUpperCase() : s.toLowerCase()
}


function letterCasePermutation(s: string): string[] {
    const result:string[] = [];
    const dfs = (depths: number, str: string) => {
        result.push(str);
        for(let i = depths; i < str.length; i++) {
            const current = str[i];
            if(!/[a-zA-Z]/.test(current)) continue;
            str = str.slice(0, i) + changeLetter(s[i]) + str.slice(i, 1)
            dfs(depths + 1, str)
            str = str.slice(0, i) + changeLetter(s[i]) + str.slice(i, 1)
        }
    }
    dfs(0, s);

    console.log(result);

    return result;

    // const result: string[] = [];
    // const back = (cur: string, depths: number) => {
    //     if(depths === s.length) {
    //          result.push(cur);
    //          return
    //     }
    //     const cruent = s[depths];

    //     // 回溯
    //     if(/[a-zA-Z]/g.test(cruent)) {
    //         console.log(cruent);
    //         const low = cur + cruent.toLowerCase();
    //         const hight = cur + cruent.toUpperCase();
    //         back(low, depths + 1);
    //         back(hight, depths + 1);
    //     } else { // 数字跳过
    //         back(cur+ cruent, depths + 1)
    //     }
    // }

    // back('', 0)
    // return result;
};

letterCasePermutation('a1b2')