/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // each 3x3 box
  let r = 0;
  let c = 0; 
  let taken = [];
  while(r < 9 && c < 9) {
    // each row
    for (let i=0; i<3; i++) {
      // each col
      for (let y=0; y<3; y++) {        
        if (board[i+r][y+c] !== '.') {
          if (!taken.includes(board[i+r][y+c])) {
            taken.push(board[i+r][y+c]);
          } else {
            return false;
          }
        }
      }
    }
    taken = [];
    if (c + 3 === 9) {
      c = 0;
      r += 3
    } else {
      c += 3;
    }
    
  }

  taken = [];
  let valid = true;
  // each row
  for (let i=0; i<board.length; i++) {
    board[i].forEach(ele => {
      if (ele !== ".") {
        if (!taken.includes(ele)) {
          taken.push(ele);
        } else {
          valid = false;
        }
      }
    });
    if (!valid) return false;
    taken = [];
  }
  
  // each col 
  for (let i=0; i<board.length; i++) {
    for (let y=0; y<board.length; y++) {
      if (board[y][i] !== '.') {
        if (!taken.includes(board[y][i])) {
          taken.push(board[y][i]);
        } else {
          return false;
        }
      }
    }
    taken = [];
  }
  
  
  
  
  return true;
};