var plusOne = function(digits) {
  
  let counter = digits.length-1;
  while(counter >= 0) {
    if (digits[counter] + 1 === 10) {
      digits[counter] = 0;
      if (counter === 0) {
        digits.unshift(1)
        return digits
      }
      counter--;
    } else {
      digits[counter]++
      return digits;
    }
  }
  
};