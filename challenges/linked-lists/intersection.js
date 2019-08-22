'use strict';
let LinkedList = require('./LinkedList').LinkedList;

function intersection(list1, list2) {
  if (list1.head === null || list2.head === null) return null;

  let result1 = findTailandSize(list1);
  let result2 = findTailandSize(list2);

  // check if tail nodes are equivalent
  if (result1.tail !== result2.tail) {
    return null;
  }

  // find head of largest list and difference in list length
  let shorter = result1.size < result2.size ? list1.head : list2.head;
  let longer = result1.size < result2.size ? list2.head : list1.head;

  // move pointer on longer list
  longer = movePointer(longer, Math.abs(result1.size - result2.size));

  while (shorter != longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  // return either node
  return longer;
}

function findTailandSize(list) {
  if (list == null) return null;

  let size = 1;
  let current = list.head;
  while (current.next) {
    size++;
    current = current.next;
  }

  return {
    size,
    tail: current
  };
}

function movePointer(head, offset) {
  let current = head;
  while (offset > 0 && current != null) {
    current = current.next;
    offset--;
  }
  return current;
}

// TEST
let list1 = new LinkedList();
let list2 = new LinkedList();

list1.add(1);
list1.add(2);
list1.add(3);
let commonNode = list1.add(4);

list2.add(5);
list2.add(6);

// Set common node
let tempCurrent = list2.head;
while (tempCurrent.next) {
  tempCurrent = tempCurrent.next;
}
tempCurrent.next = commonNode;

console.log(intersection(list1, list2));
