const qian = ['a','c','f','g','b','d','e'];
const zhong = ['f','c','g','a','d','b','e'];

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function f1(qian,zhong) {
    if( qian == null || zhong == null ||
        qian.length == 0 || zhong.length == 0
        || qian.length != zhong.length)
        return null;
    const root = new Node(qian[0]);
    let index = zhong.indexOf(root.value);
    let leftQian = qian.slice(1,index + 1);
    let rightQian = qian.slice(index + 1, qian.length);
    let leftZhong = zhong.slice(0,index);
    let rightZhong = zhong.slice(index + 1, zhong.length);
    root.left = f1(leftQian,leftZhong);
    root.right = f1(rightQian,rightZhong);
    return root;
}
const root = f1(qian,zhong);
console.log(root);
/**
 * 深度优先搜索
 * @param root
 * @param target
 */
function seachHeight(root, target) {
    if(root == null) return false;
    if(root.value == target) return true;
    const left = seachHeight(root.left);
    const right = seachHeight(root.right);
    return left || right;
}
// console.log(seachHeight((root,'f')))
/**
 * 广度优先搜索   将二叉树的每一层分别查找
 * @param rootList
 * @param taget
 */
function seachWidth(root, target) {
    if( root == null) return false;
    let left, right;
        if( root != null && root.value == target){
            return true;
        } else {
            left = seachWidth(root.left,target);
            right = seachWidth(root.right, target);
        }
    return left || right;
}


console.log( seachWidth(root, 'e'));