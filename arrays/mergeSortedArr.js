/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
  let counter = 0;
  while(counter < nums1.length-1) {
    if(nums2[0] < nums1[counter]) {

        let insert = nums2[0];
        for(let i=counter; i<nums1.length; i++) {
          let d = nums1[i];
          nums1[i] = insert;
          insert = d;
      }
      nums2.shift();
    }
    counter++

  }    
  if (nums2.length > 0) {
    for(let i=m+n-nums2.length; i<nums1.length; i++) { 
      nums1[i] = nums2.shift();
    }
  }

    
};