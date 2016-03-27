141. Linked List Cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	if(head === null){
		return false;
	}
    var pointer1 = head;
    var pointer2 = head;
    while(pointer2 !== null && pointer2.next !== null){
    	pointer1 = pointer1.next;
    	pointer2 = pointer2.next.next;
    	if(pointer1 === pointer2){
    		return true;
    	}
    }
    return false;
};