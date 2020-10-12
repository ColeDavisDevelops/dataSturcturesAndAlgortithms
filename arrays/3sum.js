/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ans = [];
    
    for (let i=0; i<nums.length-2; i++) {
        for (let y=i+1; y<nums.length-1; y++) {
            for (let z=y+1; z<nums.length; z++) {
                if (nums[i] + nums[y] + nums[z] === 0) {
                    if (unique([nums[i], nums[y], nums[z]], ans)) ans.push([nums[i], nums[y], nums[z]])
                }
            }
        }
    }
    
    return ans;
};

const unique = (arr, aoa) => {
    for (let i=0; i<aoa.length; i++) {
        let dArr = [...arr]
        let counter = 0;
        aoa[i].forEach(ele => {
            if (dArr.includes(ele)) {
                var index = dArr.indexOf(ele);
                dArr.splice(index, 1);
                counter++
            } 
        })
        if (counter === 3) return false;
    }
    return true
}