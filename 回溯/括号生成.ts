

// 选括号
// {{{}}}


function generateParenthesis(n: number): string[] {
    if (n < 1) return [];
    const res: string[] = [];
    dfs('', 0, n, res)
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
    generateParenthesis(2))