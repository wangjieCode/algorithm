function random(target) {
    const arr = [];
    for (let i = 0; i < target; i++) {
        arr.push( Math.floor( Math.random() * target ))
    }
    return arr;
}

/**
 * 基础二叉树
 * @param value
 * @constructor
 */
function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}
function addNode(root,value) {
    if(root == null) return;
    if(root.value == value) return;
    if(root.value > value){//比目标值小的  left
        if(root.left == null) root.left = new Node(value);
        else addNode(root.left,value);
    } else{     //比目标值大的  right
        if(root.right == null) root.right = new Node(value);
        else addNode(root.right,value)
    }
}
/**
 * 传入数组构建二叉搜索树
 * @param arr
 */
function create2Tree(arr) {
    if(arr == null || arr.length == 0 ) return;
    const root = new Node(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        addNode(root, arr[i]);
    }
    return root;
}
let index = 0, tempIndex = 0;
function seach(arr,target) {
    tempIndex ++;
    if(arr == null) return;
    for (let i = 0; i < arr.length; i++) {
        index ++;
        if( arr[i] == target) return true;
    }
    return false;
}
function seachTree(root, target) {
    index ++;
    if( root == null ) return false;
    if( root.value === target ) {
        return true;
    }
    if( root.value > target ){
        return  seachTree(root.left,target);
    } else {
        return  seachTree(root.right,target)
    }
}
const arr = random(1000000);
const reslutA = seach(arr,3);
console.log(reslutA,tempIndex);
const root = create2Tree(arr);
console.log(seachTree(root,3),index);