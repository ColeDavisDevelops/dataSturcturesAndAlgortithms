/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // sort arr, 
    
    // count differences ? 
    let curr = [...heights]; 
    heights.sort((a,b) => a-b);
    let counter = 0;
    console.log(heights);

    curr.forEach((h, idx) => {
        if (curr[idx] !== heights[idx]) counter++;
    });
    
    return counter; 
};