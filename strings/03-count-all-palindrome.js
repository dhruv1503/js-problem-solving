
// TC => O(n)
// SC => O(n)
function reverseString(string = "") {        
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string.charAt(i);
  }
  return reversedString;
}

// TS =>  O(1)
//     SC=> O(1)
function isPalindrome(string) {
  return string === reverseString(string);
}


// TS => O(N^2)
// SC =>O(N^3)
function getAllSubstrings(string) {
  if (string.length <= 1) {
    return [];
  }
  const stringArr = [];

  for (let i = 0; i < string.length - 1; i++) {
    for (let j = i + 1; j < string.length; j++) {
      stringArr.push(string.substring(i, j + 1));
    }
  }
  return stringArr;
}

// TC => O(N);
// SC => O(N);
function countPalindromes(string) {
  let palindromeCount = 0;
  if (string.length <= 1) {
    return palindromeCount;
  }
  const substrings = getAllSubstrings(string);
  for (const substr of substrings) {
    if (isPalindrome(substr)) {
      palindromeCount += 1;
    }
  }
  return palindromeCount;
}

// BRUTE FORCE
// SC => N^2;
// TC => N^3;

console.log(countPalindromes("aabbbaa"));


// Optimized approach 
// 1. Select a mid point (m)
//  eg 
//  aabbbaa
//   ^
// 2. Choose a left pointer (m-1) and right pointer (m+1)

// eg
// a a b b b a a
// L M R

// 3. create strings based on pointers
// here, eg 
// leftStr = L TO M => aa
// rightStr = M TO R => ab

// 4. Compare strings
// leftStr === rightStr 
