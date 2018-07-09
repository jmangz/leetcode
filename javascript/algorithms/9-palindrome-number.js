// Determine whether an integer is a palindrome. An integer is a palindrome
// when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-.
// Therefore it is not a palindrome.
// Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:
//
// Coud you solve it without converting the integer to a string?

// Original attempt.
function isPalindrome(num) {
  const str = String(num);

  for (let i = 0; i < str.length / 2; i += 1) {
    const startChar = str[i];
    const endChar = str[str.length - 1 - i];
    if (startChar !== endChar) return false;
  }

  return true;
}
