/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.value = null;
    this.next = null;
};

MyLinkedList.prototype.get = function(index) {

};

MyLinkedList.prototype.addAtHead = function(val) {
    this.next = val;
};

MyLinkedList.prototype.addAtTail = function(val) {
    if(this.next.next == null) this.next = val;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {

};

MyLinkedList.prototype.deleteAtIndex = function(index) {

};

const myLink = new MyLinkedList();
myLink.addAtHead(1);
myLink.addAtHead(2);

