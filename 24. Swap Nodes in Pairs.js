24. Swap Nodes in Pairs
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
var swapPairs = function(head) {
	if(head === null || head.next === null){
		return head;
	}
    var dummy = new ListNode(0);
    dummy.next = head;
    head = dummy;
    var swapped = false;
    while(head.next.next !== null){
    	if(!swapped){
    		var cur = head.next;
    		var next = head.next.next;
    		head.next = next;
    		cur.next = next.next;
    		next.next = cur;
    		head = next;
    	} else {
    		head = head.next;
    	}
    }
    return dummy.next;
};