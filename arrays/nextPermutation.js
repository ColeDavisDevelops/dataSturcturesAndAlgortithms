const nextPermutation = (nums) => {
  let desc = true; 
  for(let i=0; i<nums.length-1; i++) {
    if(nums[i] < nums[i+1]) desc = false;
  }
  if (desc === true) return nums.reverse();
    
  for (let i=nums.length-1; i>0; i--) {
    if(nums[i] > nums[i-1]) {
      // find the next highest value to the right of a[i];
      let diff = +Infinity;  
      let j;
      for (let y=i; y<nums.length; y++) {
        if(nums[y] > nums[i-1] && (nums[y] - nums[i-1]) < diff) {
          diff = nums[y] - nums[i-1];
          j = y;
        }
      }
      let d = nums[j];
      nums[j] = nums[i-1];
      nums[i-1] = d;
      let da = nums.slice(i)
      da.sort((a,b) => a-b);
      
      for (let x=i; x<nums.length; x++) {
        
        nums[x] = da.shift()
      }
      return;
    }
  }
  
}