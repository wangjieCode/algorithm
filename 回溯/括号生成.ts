

// 选括号
// {{{}}}
function generateParenthesis(n: number): string[] {
    const res = [] as string[];
    // 生成括号n的长度
    const createAll = (n: number, left: number, right: number, current: string) => {
        if(left == n && right == n) {
            res.push(current);
            return;
        }
        if(left > n || right > left || right > n) return;
        createAll(n, left + 1, right, current + '(')
        createAll(n, left, right + 1, current + ')')
    }
    createAll(n, 0, 0, '')
    return res;
};

function dfs(cur: string, start, depth = 0, res) {
    if (depth === 0) {
        res.push(cur);
        return;
    } else {
        // cur[start] = '(';
        // dfs(current, pos + 1, result);
        // current[pos] = ')';
        // dfs(current, pos + 1, result);
    }
   
}

console.log(
    generateParenthesis(3))