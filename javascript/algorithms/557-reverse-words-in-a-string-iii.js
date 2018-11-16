// Given a string, you need to reverse the order of characters in
// each word within a sentence while still preserving whitespace and initial word order.
//
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space
// and there will not be any extra space in the string.

function reverseWords(str) {
  if (str === '') return '';
  const result = [];
  let word = '';
  const { length } = str;

  for (let i = length - 1; i >= 0; i -= 1) {
    const char = str[i];
    if (i === 0) {
      word += char;
      result.push(word);
      return result.reverse().join(' ');
    }
    if (char !== ' ') {
      word += char;
    } else {
      result.push(word);
      word = '';
    }
  }
}
