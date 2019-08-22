'use strict';
const Stack = require('./Stack').Stack;

class StackWithCapacity extends Stack {
  constructor(capacity) {
    super();
    this.capacity = capacity;
    this.size = 0;
  }
  pop() {
    if (this.top === null) throw new Error;
    const data = this.top.data;
    this.top = this.top.next;
    this.size--;
    return data;
  }
  push(data) {
    if (this.isFull()) return new Error;
    super.push(data);
    this.size++;
  }
  isFull() {
    return this.capacity === this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
}

class SetOfStacks {
  constructor(defaultCapacity = 5) {
    this.stacks = [];
    this.defaultCapacity = defaultCapacity;
  }
  addStack(capacity = this.defaultCapacity) {
    const newStack = new StackWithCapacity(capacity);
    this.stacks.push(newStack);
    return newStack;
  }
  getLastStack() {
    if (this.stacks.length === 0) return null;
    return this.stacks[this.stacks.length - 1];
  }
  pop() {
    const last = this.getLastStack();
    if (last === null) throw new Error;
    const data = last.pop();
    if (last.isEmpty()) this.stacks.splice(-1, 1); // trim off last stack
    return data;
  }
  push(data) {
    const last = this.getLastStack();
    if (last !== null && !last.isFull()) {
      last.push(data);
    }
    else {
      const newStack = this.addStack();
      newStack.push(data);
    }
  }
  // This implementation of popAt allows for "interior" stacks to be maintained
  // at less than full capacity. Keeping the interior stacks full at all times
  // would require significantly more logic
  popAt(index) {
    if (this.stacks[index] === undefined) return new Error;
    this.stacks[index].pop();
  }
}

// TESTS
let testSet = new SetOfStacks();
testSet.push(1);
testSet.push(2);
testSet.push(3);
testSet.push(4);
testSet.push(5);
testSet.push(6);

console.log(testSet);
console.log(testSet.pop());
console.log(testSet);

