'use strict';

function removeDuplicates(list) {
  let hash = {};
  let current = list.head;
  let prev = null;
  let position = 1;

  while (current) {
    position++;

    // if a node with current data's exists, remove current
    if (hash[current.data]) {
      prev.next = current.next;
      list._length--;
    }
    else {
      hash[current.data] = true;
      prev = current;
    }
    current = current.next;
  }

  return list;
}
