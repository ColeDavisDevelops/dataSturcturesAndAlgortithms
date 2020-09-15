// terminating condition (base case)
// if (head.next === null) {
//   return null
// }


// condition that reduces input to the terminatign condition (reccurence relation)
// dummy = head.next.next
// head.next.next = head 
// return head

var swapPairs = function(head) {
  if (head === null) return head;
  if (head.next === null) return head;
  
  let next = null;
  if (head.next !== null && head.next.next !== null) {
    next = head.next.next;
  } 
  
  let newHead = head.next;
  newHead.next = head;

  newHead.next.next = next;
  
  if (next !== null) {
    newHead.next.next = swapPairs(next);
  }

  return newHead; 
};
