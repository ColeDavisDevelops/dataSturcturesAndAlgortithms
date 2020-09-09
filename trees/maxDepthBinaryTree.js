var maxDepth = function(root) {
  if (root === null) return 0;
  let left = 1; 
  let right = 1;
  if (root.left) {
    left = maxDepth(root.left) + 1;
  }
  if (root.right) {
    right = maxDepth(root.right) + 1;
  }
  
  if (left > right) {
    return left
  } else if (right > left) {
    return right
  }
  return left;
};

