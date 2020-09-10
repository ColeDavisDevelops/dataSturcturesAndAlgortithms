var intersect = function(nums1, nums2) {
  let s = [];
  let l = [];
  if(nums1.length > nums2.length) {
    l = nums1;
    s = nums2;
  } else if (nums1.length < nums2.length) {
    l = nums2;
    s = nums1; 
  } else {
    l = nums1;
    s = nums2;
  }
  let inter = [];
  for (let i=0; i<s.length; i++) {
    if (l.includes(s[i])) {
      inter.push(s[i])
      let idx = l.indexOf(s[i])
      l.splice(idx, 1);
      
    }
  }
  return inter
};


