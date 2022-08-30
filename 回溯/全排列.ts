

// [1,2,3]
// return [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]


function permute(nums: number[]): number[][] {

    const res: number[][] = []; // 存储结果
    const paths: number[] = []; // 存储下标
    const used: boolean[] = []; // 存储是否使用过
    permuteHelper(nums, 0, paths, used, res);
    return res;
}

function permuteHelper (nums: number[], depth: number, paths: number [], used: boolean [], res: number[][]) {
    if(nums.length === depth) {
        console.log(paths);
        res.push(paths);
        return;
    }
    for(let i = 0; i < nums.length; i++) {
        if(used[i]) {
            continue;
        }
        paths.push(nums[i]);
        used[i] = true;
        permuteHelper(nums, depth + 1, paths, used, res);
        paths.pop();
        used[i] = false;
    }
}

 console.log( permute([1,2,3]) )