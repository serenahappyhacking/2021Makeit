/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  if (head === null) return null
  if (head.val === val) return head.next
  let post = head, pre = head.next
  while (pre !== null && pre.val !== val) {
    post = pre
    pre = pre.next
  }
  if (pre !== null) {
    post.next = pre.next
  }
  return head
}