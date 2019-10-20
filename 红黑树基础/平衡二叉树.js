
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");
var f = new Node("f");
var g = new Node("g");
var h = new Node("h");
var j = new Node("j");

a.left = b;
b.left = c;
c.left = d;

/**
 * 获取二叉树的深度
 * @param root
 */
function getDeep(root) {
    if(root == null) return 0;
    const left = getDeep(root.left);
    const right = getDeep(root.right);
    return Math.max(left,right) + 1;  //左右树深度加上自身
}
function isBalance(root){
   if(root == null) return true;
   const left = getDeep(root.left);
   const right = getDeep(root.right);
   if( Math.abs(left - right) > 1) return false;  //左右树的深度相差大于一  不平衡
   else return isBalance(root.left) && isBalance(root.right);
}
console.log(getDeep(a),isBalance(a))