var isPalindrome = function(head) {
    if (head === null) {
        return true
    }
    let arr = [head.val];
    let curr = head.next;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }
    let left;
    let right;
    if (arr.length === 2) return arr[0] === arr[1] ? true : false
    
    if (arr.length % 2 === 0) {
        left = arr.length / 2 - 1;
        right = arr.length / 2;
    } else {
        left = Math.floor(arr.length / 2) -1;
        right = Math.ceil(arr.length / 2);
    }
    
    while(left >= 0 || right <= arr.length-1) {
        if (arr[left] !== arr[right]) {
            return false
        }  
        left--
        right++
    }
    return true
};