'use strict';

// Build Linked List (singly linked) class
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this._length = 0;
  this.head = null;
}

LinkedList.prototype.add = function(value) {
  let node = new Node(value);
  let current = this.head;

  // if list is empty
  if (!current) {
    this.head = node;
    this._length++;

    return node;
  }

  while (current.next) {
    current = current.next;
  }

  current.next = node;
  this._length++;

  return node;
}

LinkedList.prototype.searchAt = function(position) {
  let current = this.head;
  let length = this._length;
  let count = 1;
  let message = {failure: 'Failure: node does not exist'};

  // if position is invalid
  if (length === 0 || position < 1 || position > length) {
    throw new Error(message.failure);
  }

  while (count < position) {
    current = current.next;
    count++;
  }

  return current;
}

LinkedList.prototype.remove = function(position) {
  let current = this.head;
  let prev = null;
  let deletedNode = null;
  let length = this._length;
  let message = {failure: 'Failure: node does not exist'};

  // if position is invalid
  if (position < 0 || position > length) {
    throw new Error(message.failure);
  }

  // if removing first node
  if (position === 1) {
    this.head = current.next;
    deletedNode = current;
    current = null;
    this._length--;

    return deletedNode;
  }

  let count = 1;
  while (count < position) {
    prev = current;
    current = current.next;
    count++;
  }

  prev.next = current.next;
  deletedNode = current;
  current = null;
  this._length--;

  return deletedNode;
}

LinkedList.prototype.printOutData = function() {
  let current = this.head;
  while (current) {
    console.log(current.data);
    current = current.next;
  }
}

module.exports = {
  LinkedList,
  Node
};
