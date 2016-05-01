142. Linked List Cycle II
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var slow = head;
    var fast = head;
    while(fast !== null && fast.next !== null){
    	slow = slow.next;
    	fast = fast.next.next;
    	if(slow === fast){
    		slow = head;
    		while(slow !== fast){
    			slow = slow.next;
    			fast = fast.next;
    		}
    		return fast;
    	}
    }
    return null;
};