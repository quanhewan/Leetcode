92. Reverse Linked List II
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
	if(head === null || head.next === null || m > n){
		return head;
	}

    var dummy = new ListNode(0);
    dummy.next = head;

    var nodeM,
    	nodeN,
    	prevM,
    	postN;

    nodeM = head;
    prevM = dummy;

    for(var i = 1; i < m; i++){
    	nodeM = nodeM.next;
    	prevM = prevM.next;
    }

    nodeN = nodeM;
    postN = nodeM.next;
    for(i = m; i < n; i++){
    	var temp = postN.next;
    	postN.next = nodeN;
    	nodeN = postN;
    	postN = temp; 
    }
    
    prevM.next = nodeN;
    nodeM.next = postN;

    return dummy.next;
};