'use strict';
const Stack = require('./Stack').Stack;

class MyQueue {
  constructor() {
    this.stackNewest = new Stack();
    this.stackOldest = new Stack();
  }
  add(data) {
    this.stackNewest.push(data);
  }
  shiftStacks() {
    if (this.stackOldest.isEmpty()) {
      while (!this.stackNewest.isEmpty()) {
        this.stackOldest.push(this.stackNewest.pop());
      }
    }
  }
  peek() {
    this.shiftStacks(); // Ensure stackOldest has the current elements
    return this.stackOldest.peek();
  }
  remove() {
    this.shiftStacks(); // Ensure stackOldest has the current elements
    return this.stackOldest.pop();
  }
}

// TESTS
let testQueue = new MyQueue();
testQueue.add(1);
testQueue.add(2);
testQueue.add(3);

console.log(testQueue);
testQueue.shiftStacks();
console.log(testQueue);

console.log(testQueue.peek());
console.log(testQueue.remove());
console.log(testQueue);
