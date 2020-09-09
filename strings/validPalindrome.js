/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0) return true;
  let formatted = [];
  let counter = 0;
  console.log(s)
  s = s.match(/([0-9a-zA-Z ])/g);
  if (!s) return true;
  
  s.forEach(char => {
    if (char !== " "){
      formatted.push(char.toLowerCase());
    }
  });
  if (formatted.length % 2 !== 0) {
    formatted.splice(Math.floor(formatted.length/2), 1);
  }
  let half = Math.floor(formatted.length/2)
  while(counter <= half) {
    console.log(counter)
    if (formatted[formatted.length/2-1] === formatted[formatted.length/2]) {
      formatted.splice(Math.floor(formatted.length/2)-1, 1);
      formatted.splice(Math.floor(formatted.length/2), 1);
      counter++ 
    } else {
      return false;
    }
  }
  return true;
};