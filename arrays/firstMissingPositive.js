/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // if === 1 then look for 2; 
    // look for 2 in hash, if exist look for 3; 
    
    
    let ans = 1;
    let mem = {};
    for (let i=0; i<nums.length; i++) {
      if (nums[i] === ans) {
        ans++;
        while(mem[ans]) {
          ans++
        }
      }
      mem[nums[i]] = true;
    }
    
    return ans;
};