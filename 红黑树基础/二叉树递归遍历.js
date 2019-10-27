class Node{	
	static left = null;
	static right = null;
	constructor(value){
		this.value = value;
	}
}
const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

/**
 * 前序遍历
 * @param {根节点}} root 
 */
function qian(root){
	if(root == null) return;
	console.log(root.value);
	qian(root.left);
	qian(root.right);
}

/**
 * 中序遍历
 * @param {根节点}} root 
 */
function zhong(root) {
	if (root == null) return;
	zhong(root.left);
	console.log(root.value);
	zhong(root.right);
}

/**
 * 后序遍历
 * @param {根节点}} root 
 */
function hou(root) {
	if (root == null) return;
	hou(root.left);
	hou(root.right);
	console.log(root.value);
}

console.log(qian(a))
console.log(zhong(a))
console.log(hou(a))
