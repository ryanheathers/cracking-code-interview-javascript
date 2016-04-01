'use strict';

// Implement Stack data structure
class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  pop() {
    if (this.top === null) throw new Error;
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }
  push(data) {
    const node = new StackNode(data);
    node.next = this.top;
    this.top = node;
  }
  peek() {
    if (this.top === null) throw new Error;
    return this.top;
  }
  isEmpty() {
    return this.top === null;
  }
}

module.exports = {
  StackNode,
  Stack
};
