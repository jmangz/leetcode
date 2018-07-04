// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
// (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
//
// string convert(string s, int numRows);
// Example 1:
//
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:
//
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
//
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

function convert(str, numRows) {
  if (numRows === 1) return str;
  if (numRows === 2) {
    const even = [];
    const odd = [];

    for (let i = 0; i < str.length; i += 1) {
      const char = str[i];
      if (i % 2 === 0) even.push(char);
      else odd.push(char);
    }
    return even.join('').concat(odd.join(''));
  }
  const toConvert = [];

  for (let i = 0; i < numRows; i += 1) {
    toConvert.push([]);
  }

  let counter = numRows - 2;
  let j = 0;
  let k = 0;
  let flag = false;

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (flag) {
      if (j === counter) {
        toConvert[j][k] = char;
        counter -= 1;
        j += 1;
      } else {
        toConvert[j][k] = '';
        j += 1;
        i -= 1;
        if (counter === 0 && j === numRows) {
          flag = false;
          counter = numRows - 2;
          j = 0;
          k += 1;
        } else if (j === numRows) {
          j = 0;
          k += 1;
        }
      }
    } else {
      toConvert[j][k] = char;
      j += 1;
      if (j === numRows) {
        flag = true;
        j = 0;
        k += 1;
      }
    }
  }

  return toConvert.reduce((acc, row) => {
    acc += row.join('');
    return acc;
  }, '');
}
