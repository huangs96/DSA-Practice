/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var reverseList = function(head) {
  if (head === null) return head;

  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
      nextNode = currentNode.next;
  }
};