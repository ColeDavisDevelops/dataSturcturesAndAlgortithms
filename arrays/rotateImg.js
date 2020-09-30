/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const stack = [];
    for(let c=0; c<matrix.length; c++) {
        for(let r=0; r<matrix.length; r++) {
            stack.push(matrix[r][c]);
        }
    }
    for(let r=matrix.length-1; r>=0; r--) {
        for(let c=0; c<matrix.length; c++) {
            matrix[r][c] = stack.pop()
        }
    }
};
