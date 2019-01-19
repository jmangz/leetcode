/*
Design your implementation of the linked list. You can choose to use the singly linked list or the
doubly linked list. A node in a singly linked list should have two attributes: val and next. val is
the value of the current node, and next is a pointer/reference to the next node. If you want to use
the doubly linked list, you will need one more attribute prev to indicate the previous node in the
linked list. Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return
-1.
addAtHead(val) : Add a node of value val before the first element of the linked list. After the
insertion, the new node will be the first node of the linked list
addAtTail(val) : Append a node of value val to the last element of the linked list.
addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If
index equals to the length of linked list, the node will be appended to the end of linked list. If
index is greater than the length, the node will not be inserted.
deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.
Example:

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3
Note:

All values will be in the range of [1, 1000].
The number of operations will be in the range of [1, 1000].
Please do not use the built-in LinkedList library.
*/

/**
 * Initialize your data structure here.
 */
const MyLinkedList = function () {
  this.head = null;
};

function Node(val) {
  this.val = val;
  this.next = null;
}
/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0) return -1;
  if (index === 0) {
    if (this.head === null) return -1;
    return this.head.val;
  }

  let current = this.head;
  let count = 0;

  while (count < index) {
    if (current === null) return -1;
    current = current.next;
    count += 1;
  }

  if (current === null) return -1;

  return current.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);

  if (this.head === null) {
    this.head = node;
    return;
  }

  const current = this.head;
  node.next = current;
  this.head = node;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);

  if (this.head === null) {
    this.head = node;
    return;
  }

  let current = this.head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0) return;

  const node = new Node(val);

  if (index === 0) {
    this.head = node;
    return;
  }

  let current = this.head;
  let count = 1;

  while (count < index) {
    if (current === null) return;
    current = current.next;
    count += 1;
  }

  if (current === null) return;

  const afterNode = current.next;
  current.next = node;
  node.next = afterNode;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0) return;
  if (index === 0) {
    if (this.head === null) return;
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  let count = 1;

  while (count < index) {
    if (current.next === null) return;
    current = current.next;
    count += 1;
  }

  if (current.next === null) return;
  current.next = current.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = Object.create(MyLinkedList).createNew()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const list = new MyLinkedList();
// list.addAtHead(1);
// list.addAtTail(3);
// list.addAtIndex(1, 2);
// console.log(list.get(1));
// list.deleteAtIndex(1);
// console.log(list.get(1));
// console.log(list);


// list.addAtHead(1);
// list.addAtIndex(1, 2);
// console.log(list.get(1));
// console.log(list.get(0));
// console.log(list.get(2));
// console.log(list);

list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
list.deleteAtIndex(3);

console.log(list);
