'use strict';
// QUESTION: There are 3 types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character. Given
// two strings, write a function to check if they are one edit (or zero edits) away
// EXAMPLE:
// pale, ple == true
// pales, pale == true
// pale, bale == true
// pale, bake == false

// YP: O(N*M) TIME, O(N*M) SPACE (using dynamic programming)
export const oneAwayYP = (str1, str2) => {
  const str1Len = str1.length;
  const str2Len = str2.length;

  const memo = [];

  for (let i = 0; i <= str1Len; i++){
    memo.push([]);
    memo[i].push(new Array(str2Len));
    for (let j = 0; j <= str2Len; j++){
      if (i === 0) memo[i][j] = j;
      else if (j === 0) memo[i][j] = i;
      else if (str1[i-1] === str2[j-1]) memo[i][j] = memo[i-1][j-1];
      else memo[i][j] = 1 + Math.min(memo[i-1][j], memo[i][j-1], memo[i-1][j-1]);
      // Math.min(remove, insert, delete)
    }
  }

  return memo[str1Len][str2Len] <= 1;

}


export function oneAway(str1, str2) {
  const str1Length = str1.length, str2Length = str2.length;

  if (Math.abs(str1Length - str2Length) > 1) return false;

  const isInsertion = str1Length < str2Length,
        isDeletedChar = !isInsertion && str1Length !== str2Length;

  let isEdited = false, i, x;

  for (i = x = 0; i < str1Length && x < str2Length; i++, x++) {
    if (str1[i] !== str2[x]) {
      if (isEdited) return false;
      if (isInsertion) i--;
      else if (isDeletedChar) x--;
      isEdited = true;
    }
  }

  return true;
}
