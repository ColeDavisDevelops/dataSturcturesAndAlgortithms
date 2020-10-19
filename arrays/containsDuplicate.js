/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let duplicates = false;
  let currNums = [];
  nums.forEach(num => {
    if (!currNums.includes(num)) {
      currNums.push(num)
    } else {
      duplicates = true;
    }
  });
  return duplicates;
    
};