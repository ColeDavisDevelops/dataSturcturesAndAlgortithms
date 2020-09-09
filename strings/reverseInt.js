var reverse = function(x) {
  let isNegative = false;
  if (x < 0) isNegative = true;
  const stack = [];
  let reversed = '';
  x.toString().split("").forEach(char => stack.push(char));
  while(stack.length > 0) {
    reversed += stack.pop()
  }
  reversed = parseInt(reversed);
  if (reversed > 2**31 || reversed < -(2**31)) return 0; 

  if (isNegative) return reversed * -1;
  return reversed;
};