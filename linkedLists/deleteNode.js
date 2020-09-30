var deleteNode = function(node) {
    let val = node.next.val;
    let next = node.next.next; 
    node.val = val;
    node.next = next;
};