// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function lengthOfLongestSubstring(str) {
  let found = {};
  let max = 0;
  let currentLength = 0;

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (found[char] !== undefined) {
      currentLength = 0;
      i = found[char];
      found = {};
    } else {
      found[char] = i;
      currentLength += 1;
      if (max === 0 || max <= currentLength) max = currentLength;
    }
  }

  return max;
}
