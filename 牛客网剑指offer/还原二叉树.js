function Node(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}
const qian = [1,2,4,7,3,5,6,8];
const zhong = [4,7,2,1,5,3,8,6];
 

const root = reConstructBinaryTree(qian,zhong);
console.log(root);