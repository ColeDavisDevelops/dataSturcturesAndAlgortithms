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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    let h = getHeight(root);
    
    for(let i=1; i<=h; i++) {
        let arr = helper(root, i);
        console.log(arr)
        
        let l = arr.length % 2 === 0 ? arr.length / 2 - 1 : Math.floor(arr.length / 2) - 1;
        let r = arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);
        
        if (arr.length === 2) {
            l = 0;
            r = 1;
        }

        while (l >= 0) {
            if (arr[l] !== arr[r]) return false;
            l--
            r++
        }
    }
    return true;
};

const helper = (root, level, arr=[]) => {
    if (root === null) {
        return; 
    }
    
    if (level === 1) {
        arr.push(root.val);
    }
    
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
