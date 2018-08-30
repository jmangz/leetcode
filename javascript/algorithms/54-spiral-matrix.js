// Given a matrix of m x n elements (m rows, n columns),
// return all elements of the matrix in spiral order.
//
// Example 1:
//
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

function spiralOrder(matrix) {
  if (matrix.length === 0) return [];
  let i = 0;
  let j = 0;
  let rightStop = matrix[0].length - 1;
  let downStop = matrix.length - 1;
  let leftStop = 0;
  let upStop = 1;
  let direction = 3;
  const finalLength = matrix.length * matrix[0].length;
  const result = [];

  while (result.length !== finalLength) {
    const el = matrix[i][j];
    result.push(el);
    switch (direction) {
      case 3:
        if (j === rightStop) {
          i += 1;
          rightStop -= 1;
          direction = 6;
        } else j += 1;
        break;
      case 6:
        if (i === downStop) {
          j -= 1;
          downStop -= 1;
          direction = 9;
        } else i += 1;
        break;
      case 9:
        if (j === leftStop) {
          i -= 1;
          leftStop += 1;
          direction = 12;
        } else j -= 1;
        break;
      case 12:
        if (i === upStop) {
          j += 1;
          upStop += 1;
          direction = 3;
        } else i -= 1;
        break;
      default:
        break;
    }
  }

  return result;
}
