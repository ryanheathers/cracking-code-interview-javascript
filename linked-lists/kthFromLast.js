'use strict';

function returnKthNode(list, kth) {
  let position = list._length - kth;
  if (position < 0 || position > list._length) {
    return false;
  }

  return list.searchAt(position);
}
