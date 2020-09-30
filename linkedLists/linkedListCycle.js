var hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false
    }
    
    const arr = []
    let curr = head;
    while(curr) {
        if (!arr.includes(curr)) {
            arr.push(curr)
        } else {
            return true
        }
        
        curr = curr.next
    }
    return false
};