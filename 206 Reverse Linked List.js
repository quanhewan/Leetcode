206. Reverse Linked List

//iteratively 104ms 89.66%

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
var reverseList = function(head) {
	var temp = [];
	while(head !== null){
		temp.unshift(head);
		head = head.next;
	}
	var length = temp.length;
	for(i=0; i<length; i++){
		temp[i].next = temp[i+1];
	}
	return temp[0] || null;
};

//recursive
