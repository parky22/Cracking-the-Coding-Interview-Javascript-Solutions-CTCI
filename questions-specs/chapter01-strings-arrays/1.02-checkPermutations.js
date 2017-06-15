'use strict';

// Given two strings, write a function to decide if one is a permutation of the other.

// YP: O(N) TIME, O(N) SPACE
export function check1 (str1, str2) {
  const str1Arr = str1.split('').sort();
  const str2Arr = str2.split('').sort();

  if (str1Arr.length !== str2Arr.length) return false;
  else {
    for (let i = 0; i < str1Arr.length; i++){
      if (str1Arr[i] !== str2Arr[i]) return false;
    }
  }

  return true;
}


// O(N log N) TIME -- O(1) SPACE
const sort = str => [...str].sort().join``;

export function checkPermutations1(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;

  return sort(str1) === sort(str2);
}

// |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|

// 0(N) TIME -- O(N) SPACE
export function checkPermutations2(str1, str2) {
  if (!str1 || !str2 || str1.length !== str2.length) return false;

  const letterMap = new Map();

  for (const letter of str1) {
    letterMap.set(letter, letterMap.get(letter) + 1 || 1);
  }

  for (const letter of str2) {
    if (!letterMap.has(letter)) return false;
    if (letterMap.get(letter) === 1) letterMap.delete(letter);
    else letterMap.set(letter, letterMap.get(letter) - 1);
  }

  return !letterMap.size;
}
