var firstUniqChar = function(s) {
  const map = s.split("").reduce((hash, char, idx) => {
    if (hash[char]) {
      hash[char].count += 1;
    } else {
      hash[char] = {
        count: 1,
        idx: idx
      }
    }
    return hash;
  }, {})
  
  let keys = Object.keys(map);
  for(let i=0; i<keys.length; i++) {
    if(map[keys[i]].count === 1) {
      return map[keys[i]].idx;
    }
  };
  return -1;
};