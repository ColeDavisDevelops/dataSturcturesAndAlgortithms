/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
 
  const aHash = s.split("").reduce((hash, char, idx) => {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
    return hash;
  }, {});
  
  for (let i=0; i<t.length; i++) {
    if (aHash[t[i]]) {
      aHash[t[i]] -= 1; 
      if (aHash[t[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
