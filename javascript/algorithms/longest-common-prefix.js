// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
//
// All given inputs are in lowercase letters a-z.

function longestCommonPrefix(strs) {
  if (strs.length === 0) return '';
  let current = strs[0];

  strs.slice(1).forEach((el) => {
    while (el.indexOf(current) !== 0) {
      current = current.slice(0, current.length - 1);
      if (current === '') return '';
    }
  });

  return current;
}

// Take the first element in the array and check if that string
// is the same as the second string. If not, then we slice off
// characters until this is true. Once it is true we move on to
// the next element. If none it is never true, then we return an
// empty string.
