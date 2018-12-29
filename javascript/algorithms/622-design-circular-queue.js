// Design your implementation of the circular queue. The circular queue is a linear
// data structure in which the operations are performed based on FIFO (First In First Out)
// principle and the last position is connected back to the first position to make a circle.
// It is also called "Ring Buffer".
//
// One of the benefits of the circular queue is that we can make use
// of the spaces in front of the queue.
// In a normal queue, once the queue becomes full, we cannot insert the next element even
// if there is a space in front of the queue. But using the circular queue,
// we can use the space to store new values.
//
// Your implementation should support following operations:
//
// MyCircularQueue(k): Constructor, set the size of the queue to be k.
// Front: Get the front item from the queue. If the queue is empty, return -1.
// Rear: Get the last item from the queue. If the queue is empty, return -1.
// enQueue(value): Insert an element into the circular queue.
// Return true if the operation is successful.
// deQueue(): Delete an element from the circular queue. Return true if the operation is successful.
// isEmpty(): Checks whether the circular queue is empty or not.
// isFull(): Checks whether the circular queue is full or not.
//
//
// Example:
//
// MyCircularQueue circularQueue = new MyCircularQueue(3); // set the size to be 3
// circularQueue.enQueue(1);  // return true
// circularQueue.enQueue(2);  // return true
// circularQueue.enQueue(3);  // return true
// circularQueue.enQueue(4);  // return false, the queue is full
// circularQueue.Rear();  // return 3
// circularQueue.isFull();  // return true
// circularQueue.deQueue();  // return true
// circularQueue.enQueue(4);  // return true
// circularQueue.Rear();  // return 4
//
// Note:
//
// All values will be in the range of [0, 1000].
// The number of operations will be in the range of [1, 1000].
// Please do not use the built-in Queue library.


/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
  this.start = 0;
  this.end = 0;
  this.currentSize = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.currentSize === this.size) return false;
  if (this.currentSize === 0) {
    this.queue[0] = value;
    this.currentSize += 1;
    return true;
  }
  if (this.end === this.size - 1 && this.queue[0] === undefined) {
    this.queue[0] = value;
    this.end = 0;
    this.currentSize += 1;
    return true;
  }
  if (this.queue[this.end + 1] === undefined) {
    this.queue[this.end + 1] = value;
    this.end += 1;
    this.currentSize += 1;
    return true;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.currentSize === 0) return false;
  if (this.currentSize === 1 && this.start === 0 && this.end === 0) {
    delete this.queue[0];
    this.currentSize = 0;
    return true;
  }
  if (this.start === this.end && this.currentSize === 1) {
    delete this.queue[this.start];
    this.currentSize = 0;
    this.start = 0;
    this.end = 0;
    return true;
  }
  if (this.start === this.size - 1) {
    delete this.queue[this.start];
    this.currentSize -= 1;
    this.start = 0;
    return true;
  }
  delete this.queue[this.start];
  this.start += 1;
  this.currentSize -= 1;
  return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  return this.queue[this.start] !== undefined ? this.queue[this.start] : -1;
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  return this.queue[this.end] !== undefined ? this.queue[this.end] : -1;
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.currentSize === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.currentSize === this.size;
};

// const obj = new MyCircularQueue(3);
// console.log(obj.enQueue(1));
// console.log(obj.enQueue(2));
// console.log(obj.enQueue(3));
// console.log(obj.enQueue(4));
// console.log(obj.Rear());
// console.log(obj.isFull());
//
// console.log(obj.deQueue());
// console.log(obj.enQueue(4));
// console.log(obj.Rear());

// const obj = new MyCircularQueue(6);
// console.log(obj.enQueue(6));
// console.log(obj.Rear());
// console.log(obj.Rear());
// console.log(obj.deQueue());
// console.log(obj.enQueue(5));
// console.log(obj.Rear());
// console.log(obj.deQueue());
// console.log(obj.Front());
// console.log(obj.deQueue());
// console.log(obj.deQueue());
// console.log(obj.deQueue());
// console.log(obj);

// const obj = new MyCircularQueue(8);
// console.log(obj.enQueue(3));
// console.log(obj.enQueue(9));
// console.log(obj.enQueue(5));
// console.log(obj.enQueue(0));
// console.log(obj.deQueue());
// console.log(obj.deQueue());
// console.log(obj.isEmpty());
// console.log(obj.isEmpty());
// console.log(obj.Rear());
// console.log(obj.Rear());
// console.log(obj.deQueue());
// console.log(obj.deQueue());
// console.log(obj);

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = Object.create(MyCircularQueue).createNew(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
