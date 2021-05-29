// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
 
var isValid = function (s) {
    const n = s.length;
        if (n % 2 === 1) {
        return false;
    }
    const map = {
        "}": "{",
        ")": "(",
        "]": "[",
    }
    const tisk = [];
    for (let i = 0; i < n; i++) {
        const key = s.charAt(i);
        if (key == '}' || key == ')' || key == ']') {
            if (!tisk.length || tisk[tisk.length - 1] !== map[key]) {
                return false
            } else {
                tisk.pop()
            }
        } else {
            tisk.push(key)
        }
    }
    return !tisk.length
};