"use strict";

function palindromePermutation(string) {
  string = string.toLowerCase().split('').filter((char) => {
    return /\S/.test(char);
  });

  var hash = {};
  for (let i = 0; i < string.length; i++) {
    if(!hash[string[i]]) {
      hash[string[i]] = 1;
    }
    else {
      hash[string[i]]++;
    }
  }

  var countOdds = 0;
  Object.keys(hash).forEach((key) => {
    if (hash[key] % 2 !== 0) {
      countOdds++;
    }
  });
  return (countOdds <= 1) ? true : false;
}

console.log('Is "Tact Coa" a permutation of a palindrome? ' + palindromePermutation('Tact Coa'));
