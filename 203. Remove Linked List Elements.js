203. Remove Linked List Elements
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

 //recursive
var removeElements = function(head, val) {
    if(head === null){
    	return head;
    }

    while(head.val === val){
    	head = head.next;
    	if(head === null){
    		return head;
    	}
    }

    head.next = removeElements(head.next, val);

    return head;

};


 //iterative
 var removeElements = function(head, val) {
    var start = new ListNode(0);
    var pointer = start;
    start.next = head;
    while(pointer.next !== null){
    	if(pointer.next.val === val){
    		pointer.next = pointer.next.next;
    	} else {
    		pointer = pointer.next;
    	}
    }
    return start.next;
};
