/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.value = null;
    this.next = null;
};

MyLinkedList.prototype.get = function(index) {
    if(  index > 1000  || index < 0 ) return -1;
    var temp = this;
    if(index == 0){
        return this.value != null ? this.value :0
    }
    for (var i = 0.; i < index ; i ++){
        if(temp.next){
            temp = temp.next;
        }else{
            return -1
        }
    }
    return temp.value;
};

MyLinkedList.prototype.addAtHead = function(val) {
    if( val > 1000 || val < 1 ) return;
    if( !this.value ){
        this.value = val;
        return;
    }
    this.next = new MyLinkedList();
    this.next.value = val;
};

MyLinkedList.prototype.addAtTail = function(val) {
    let temp = this;
    if(this.next == null){
        this.next = new MyLinkedList();
        this.next.value = val;
        return
    }
    temp = temp.next;
    temp.addAtTail(val)
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    let tempIndex = 0;
    if(index < 0){
        const temp = new MyLinkedList();
        temp.value = val;
        temp.next = this;
        return temp
    }
    let temp = this;
    for (let i = 0; i < index; i ++){
        if(temp.next){
            temp = temp.next;
        }else if(temp.next == null){
            console.log(0)
            this.next = new MyLinkedList();
            this.next.value = val;
            this.next.next = null;
            return;
        }else{
            return
        }
    }
    const tempHead = new MyLinkedList();
    tempHead.value = val;
    tempHead.next = temp;
    this.next = tempHead;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    let temp = this;
    if(index == 0 ){
        if(temp.next){
            this.value = temp.next.value;
            this.deleteAtIndex(1)
        } else {
            this.value = null;
            this.next= null
        }

    }
    for (let i = 0; i < index ; i++) {
        if(temp.next!= null && temp.next.next == null) {
            this.next.next = null;
            return;
        } else if(temp.next != null){
            temp = temp.next;
        } else {
            return
        }
    }
    this.next = temp.next
};
["MyLinkedList","get","addAtIndex","get","get","addAtIndex","get","get"]
    [[],[0],[1,2],[0],[1],[0,1],[0],[1]]
let myLink = new MyLinkedList();
myLink.addAtIndex(1,2);
console.log(myLink.get(1));


