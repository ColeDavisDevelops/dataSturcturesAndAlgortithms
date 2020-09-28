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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    
    const h = getHeight(root)
    let max = 0;
    
    for(let i=1; i<h+1; i++) {        
        let arr = helper(root, i)
        console.log(arr)
        
        let len = arr.length
        
        
        
        while (arr[arr.length-1] === null) {
            arr.pop()
            len--
        }
        
        while (arr[0] === null) {
            arr.unshift()
            len--
        }

        if (len > max) {
            max = len
        }
    }
    
    return max;
    
};

const helper = (node, level, arr=[]) => {
    if (node === null) {
        arr.push(null);
        return;
    }
    
    if (level === 1) {
        // console.log(node.val)
        arr.push(node.val);
    }
    
    if (level > 1) {
        helper(node.left, level - 1, arr);
        helper(node.right, level - 1, arr);
    }
    
    return arr
}

const getHeight = (node) => {
    if (node === null) {
        return 0
    }
    
    let l = getHeight(node.left)
    let r = getHeight(node.right)
    
    return Math.max(l, r) + 1
}

