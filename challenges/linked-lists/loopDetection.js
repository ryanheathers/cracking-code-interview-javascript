'use strict';
let LinkedList = require('./LinkedList').LinkedList;

function loopDetection(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  // Check for no meeting point
  if (fast === null || fast.next === null) {
    return null;
  }

  slow = list.head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
}

// TEST
let list1 = new LinkedList();

list1.add(1);
let loopedNode = list1.add(2);
list1.add(3);
list1.add(4);

// Set common node
let testCurrent = list1.head;
while (testCurrent.next) {
  testCurrent = testCurrent.next;
}
testCurrent.next = loopedNode;

console.log(loopDetection(list1));
