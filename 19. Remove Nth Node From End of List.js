19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	var dummy = new ListNode(0);
	dummy.next = head;
    var prevToRemove = dummy;
    var end = dummy;
    while(n){
    	end = end.next;
    	n--;
    }

    while(end.next !== null){
    	prevToRemove = prevToRemove.next;
    	end = end.next;
    }

    prevToRemove.next = prevToRemove.next.next;
    return dummy.next;
};