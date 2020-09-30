/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    console.log(getHeight(root));
    let arr = [];
    const h = getHeight(root);
    for(let i=1; i<=h; i++) {
        arr.push(helper(root, i))
    }
    return arr;
};

const helper = (root, level, arr=[]) => {
    if (root === null) return;
    
    if (level === 1) arr.push(root.val);
    
    helper(root.left, level - 1, arr);
    helper(root.right, level - 1, arr);

    return arr;
}

const getHeight = (root) => {
    if (root === null) return 0;
    
    let l = getHeight(root.left);
    let r = getHeight(root.right);
    
    return Math.max(l, r) + 1;
}