"use strict";

function oneAway(first, second) {
  if (first === second) {
    return true;
  }
  else if (Math.abs(first.length - second.length) > 1) {
    return false;
  }

  const bigger = first.length > second.length ? first : second;
  const smaller = first.length > second.length ? second : first;

  let indexB = 0;
  let indexS = 0;
  let foundDifference = false;
  while (indexB < bigger.length && indexS < smaller.length) {
    if (bigger.charAt(indexB) !== smaller.charAt(indexS)) {
      if (foundDifference) return false;
      foundDifference = true;

      if (bigger.length === smaller.length) { // replace operations always move shorter index
        indexS++;
      }
    }
    else {
      indexS++; // if chars equal always move shorter index
    }
    indexB++; // always increment bigger index
  }

  return true;
}

console.log('Is "pale" one away from "ple"? ' + oneAway('pale', 'ple'));
console.log('Is "pale" one away from "bake"? ' + oneAway('pale', 'bake'));
