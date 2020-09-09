var reverseList = function(head) {
  let currNode = head;
  let prevNode = null;
  while(currNode !== null) {
    let dummy = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = dummy;
    
  }
  return prevNode;
};