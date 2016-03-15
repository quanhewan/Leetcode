83. Remove Duplicates from Sorted List
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
 	if(head === null || head.next === null){
 		return head;
 	}
 	var pointer = head;
    while(pointer.next !== null){
    	if(pointer.val === pointer.next.val){
    		pointer.next = pointer.next.next;
    	} else {
    		pointer = pointer.next;
    	}
    }
    return head;
};