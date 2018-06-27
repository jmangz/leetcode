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

function longestPalindrome(str) {

}

function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    const startChar = str[i];
    const endChar = str[str.length - 1 - i];
    if (startChar !== endChar) return false;
  }
  return true;
}
