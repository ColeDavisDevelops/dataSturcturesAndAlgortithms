var helper = (str1, str2) => {
  if (str2 === "" || str1 === "") return "";
  if (str1[0] !== str2[0]) return "";
  // compare first string to second str and return the LCP, called with the next string,
  // if no next string return empty string
    
    let LCP = str1[0];
    let counter = 1;
    while(str1[counter] === str2[counter] && (counter < str1.length || counter < str2.length)) {
      console.log("curr", str1[counter])
      LCP += str1[counter];
      counter++
    }
    return LCP
}

var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0];
  let LCP = "" 
  if(2 <= strs.length) {
    LCP = helper(strs[0], strs[1]);
    if (LCP === '') {
      return LCP
    }
  }
  for (let i=1; i<strs.length; i++) {
    console.log('loop')
    if(i+1 < strs.length) {
      LCP = helper(LCP, strs[i+1]);
      if (LCP === '') {
        return LCP
      }
    }
  }
  
  return LCP;
    
};
