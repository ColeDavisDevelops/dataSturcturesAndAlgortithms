var helper = (s, left, right) => {
  
  if (left >= right) return; 

  let l = s[left];
  let r = s[right];
  s[left] = r;
  s[right] = l;
  helper(s, left+1, right-1);

}

var reverseString = function(s) {
  helper(s, 0, s.length-1);
  return s;
};
