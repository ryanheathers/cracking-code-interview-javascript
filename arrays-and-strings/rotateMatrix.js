// Example matrix:
// Length of outer array === length of each inner array
// [
//  [1,2,3,4],
//  [5,6,7,8],
//  [9,10,11,12],
//  [13,14,15,16]
// ]
// http://stackoverflow.com/questions/25882480/rotating-a-nxn-matrix-in-java
function rotateMatrix(matrix, matrixLength) {
  for (let layer = 0; layer < matrixLength / 2; layer++) {
    let first = layer;
    let last = matrixLength - 1 - layer;
    for (let i = first; i < last; i++) {
      let offset = i - first;
      // save top
      let top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }
  return matrix;
}

console.log('Rotate the following matrix [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]: ' + rotateMatrix([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]], 4));
