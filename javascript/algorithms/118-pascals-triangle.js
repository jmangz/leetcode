// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
//
//
// In Pascal's triangle, each number is the sum of the two numbers directly above it.
//
// Example:
//
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

function generate(numRows) {
  if (numRows <= 0) return [];
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  const result = [[1], [1, 1]];

  while (result.length !== numRows) {
    const toPush = [1];
    const curLength = result.length;
    let i = 0;
    while (toPush.length < curLength) {
      const prevRow = result[curLength - 1];
      const sum = prevRow[i] + prevRow[i + 1];
      toPush.push(sum);
      i += 1;
    }
    toPush.push(1);
    result.push(toPush);
  }

  return result;
}
