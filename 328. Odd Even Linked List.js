328. Odd Even Linked List
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
var oddEvenList = function(head) {
	if(head === null || head.next === null || head.next.next === null){
    	return head;
    }
    var odd_pointer = head;
    var even_pointer = head.next;
    var connector = head.next;
	
    while(odd_pointer.next !== null && even_pointer.next !== null){
    	odd_pointer.next = even_pointer.next;
    	odd_pointer = odd_pointer.next;
    	even_pointer.next = odd_pointer.next;
    	even_pointer = even_pointer.next;
    }
    odd_pointer.next = connector;
    return head;
};