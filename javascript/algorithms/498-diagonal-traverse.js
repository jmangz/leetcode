// Given a matrix of M x N elements (M rows, N columns),
// return all elements of the matrix in diagonal order as shown in the below image.
//
// Example:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output:  [1,2,4,7,5,3,6,8,9]
// Explanation:
// Up-right, down-left, repeat.
// Note:
// The total number of elements of the given matrix will not exceed 10,000.
function findDiagonalOrder(matrix) {
  if (matrix.length === 0) return [];
  const results = [];
  let i = 0;
  let j = 0;
  let up = true;

  while (results.length !== matrix.length * matrix[0].length) {
    const el = matrix[i][j];
    results.push(el);
    if (up) {
      if (j === matrix[0].length - 1) {
        i += 1;
        up = false;
      } else if (i === 0) {
        j += 1;
        up = false;
      } else {
        i -= 1;
        j += 1;
      }
    } else if (!up) {
      if (i === matrix.length - 1) {
        j += 1;
        up = true;
      } else if (j === 0) {
        i += 1;
        up = true;
      } else {
        i += 1;
        j -= 1;
      }
    }
  }

  return results;
}
