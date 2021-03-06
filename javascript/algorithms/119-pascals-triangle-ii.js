// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
//
// Note that the row index starts from 0.
//
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
//
// Example:
//
// Input: 3
// Output: [1,3,3,1]
// Follow up:
//
// Could you optimize your algorithm to use only O(k) extra space?

function getRow(rowIndex) {
  if (rowIndex <= 0) return [1];

  let row = [1, 1];

  for (let i = 0; i < rowIndex - 1; i += 1) {
    const temp = [1];
    for (let j = 0; j < row.length - 1; j += 1) {
      const sum = row[j] + row[j + 1];
      temp.push(sum);
    }
    temp.push(1);
    row = temp;
  }

  return row;
}
