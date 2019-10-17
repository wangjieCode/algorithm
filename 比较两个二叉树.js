function Node (value){
	this.value = value;
	this.left = null;
	this.right = null;
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
b.left = c;
b.right = d;
a.right = e;
e.left = f;
console.log(a)