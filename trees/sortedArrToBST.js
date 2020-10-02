const sortedArrToBST = (nums) => {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);

    let root = nums[mid];

    root.left = sortedArrToBST(nums.slice(0, mid));
    root.right = sortedArrToBST(nums.slice(mid+1));

    return root;
}