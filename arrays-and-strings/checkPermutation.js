"use strict";

// Example:
// string 1: aabbccdd
// string 2: dadbcbca
function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  return (str1.split('').sort().join('') === str2.split('').sort().join(''));
}

console.log('Is "dadbcbca" a permutation of "ddaabbcc"? ' + checkPermutation('ddaabbcc', 'dadbcbca'));
console.log('Is "dadbcbcaz" a permutation of "aabbccddr"? ' + checkPermutation('aabbccddz', 'dadbcbcar'));
