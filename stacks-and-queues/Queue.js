'use strict';

// Implement Queue data structure
class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  add(item) {
    let node = new QueueNode(item);
    if (this.last !== null) {
      this.last.next = node;
    }
    this.last = node;
    if (this.first === null) {
      this.first = this.last;
    }
  }
  remove() {
    if (this.first === null) throw new Error;
    let node = this.first;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    return node;
  }
  peek() {
    if (this.first === null) throw new Error;
    return this.first;
  }
  isEmpty() {
    return this.first === null;
  }
}

module.exports = {
  QueueNode,
  Queue
};
