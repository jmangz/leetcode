// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    const startChar = str[i];
    const endChar = str[str.length - 1 - i];
    if (startChar !== endChar) return false;
  }
  return true;
}

function slidingWindow(str, size) {
  for (let i = 0; i <= str.length - size; i += 1) {
    const word = str.slice(i, i + size);
    if (isPalindrome(word)) return word;
  }
  return false;
}

function longestPalindrome(str) {
  if (isPalindrome(str)) return str;

  const result = str[0];

  for (let i = 0; i < str.length - 2; i += 1) {
    const word = slidingWindow(str, str.length - 1 - i);
    if (word) return word;
  }
  return result;
}
