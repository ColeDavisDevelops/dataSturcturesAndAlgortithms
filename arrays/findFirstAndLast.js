/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let s;
    let e;
    for (let i=0; i<nums.length; i++) {
        if(nums[i] === target) {
            s = i;
            e = i;
            for (let y=i+1; y<nums.length; y++) {
                if(nums[y] !== target) {
                  return [s,e];
                } 
                e++
            }
            return [s,e];
        }
    }
    
    
    return [-1,-1]
};