'use strict';
let StackNode = require('./Stack').StackNode;
let Stack = require('./Stack').Stack;

class StackNodeWithMin extends StackNode {
  constructor(data, min) {
    super(data);
    this.min = min;
  }
}

class StackWithMin extends Stack {
  constructor() {
    super();
  }
  push(data) {
    debugger;
    let newMin = Math.min(data, this.min());
    const node = new StackNodeWithMin(data, newMin);
    node.next = this.top;
    this.top = node;
  }
  min() {
    if (this.isEmpty()) {
      return Number.MAX_VALUE; // Error value
    }
    else {
      return this.peek().min;
    }
  }
}

// Test
let testStack = new StackWithMin();
testStack.push(3); // min value will be 3
testStack.push(4); // min value will be 3
testStack.push(2); // min value will be 2
testStack.push(8); // min value will be 2

