const helper = (root, lower, upper) => {
  console.log(root, lower, upper)
  if (root === null) {
    return true;
  }
  
  let val = root.val;  
  if (lower !== null && val <= lower) return false;
  if (upper !== null && val >= upper) return false;
  
  if (!helper(root.left, lower, val)) return false;
  if (!helper(root.right, val, upper)) return false;

  return true;
}
var isValidBST = function(root) {
  return helper(root, null, null)
};