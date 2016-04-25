86. Partition List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	if(head === null){
		return head;
	}
    var leftHead = new ListNode(0);
    var rightHead = new ListNode(0);
    var leftEnd = leftHead;
    var rightEnd = rightHead;
    var pointer = head;
    while(pointer !== null){
    	if(pointer.val < x){
    		leftEnd.next = pointer;
    		leftEnd = leftEnd.next;
    	} else {
    		rightEnd.next = pointer;
    		rightEnd = rightEnd.next;
    	}
    	pointer = pointer.next;
    }

    rightEnd.next = null;
    leftEnd.next = rightHead.next;
    return leftHead.next;
};