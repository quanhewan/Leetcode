82. Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
    var dummy = new ListNode(0);
    dummy.next = head;
    head = dummy;

    while(head.next !== null && head.next.next !== null){
    	if(head.next.val === head.next.next.val){
    		var val = head.next.val;
    		while(head.next !== null && head.next.val === val){
    			head.next = head.next.next;
    		}
    	} else {
    		head = head.next;
    	}
    }

    return dummy.next;
};