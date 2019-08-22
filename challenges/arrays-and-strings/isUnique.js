"use strict";

function isUnique(string) {
  // Could use shortcut if statement if the string charset is known and that charset has
  // a known limit. In this case assuming UTF-16 which has no hard ceiling, so no shortcut
  var hash = [];
  for (let i = 0; i < string.length; i++) {
    let val = string.codePointAt(i);
    if (hash[val]) {
      return false;
    }
    hash[val] = true;
  }
  return true;
}

console.log('Is "Falcon" all unique chars: ' + isUnique("Falcon"));
console.log('Is "Eagle" all unique chars: ' + isUnique("Eagle"));
