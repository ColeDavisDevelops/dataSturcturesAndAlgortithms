var strStr = function(haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0;
  if (haystack.length < needle.length) return -1;
  if (needle.length === 0) return 0;

  for (let i=0; i<haystack.length; i++) {
    let counter = 0;
    if (haystack[i] === needle[0]) {     
      if (needle.length === 1) return i;
      for (let y=1; y<needle.length; y++) {
        if (needle[y] === haystack[i+y]) {
          counter++ 
          if (counter === needle.length-1) {
            return i;
          }
        }
      }
    }
  }
  return -1;
};