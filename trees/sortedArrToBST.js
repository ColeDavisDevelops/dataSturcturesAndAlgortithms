/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 *  pushing to gh is ok 
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrToBST = (nums) => {
    if (nums.length === 0) return null;

    let mid = Math.floor(nums.length / 2);

    let root = nums[mid];

    root.left = sortedArrToBST(nums.slice(0, mid));
    root.right = sortedArrToBST(nums.slice(mid+1));

    return root;
}