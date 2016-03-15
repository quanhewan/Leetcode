206. Reverse Linked List

//iteratively requires O(n) space 104ms 89.66% 

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

//iteratively requires O(1) space 104ms 89.66% 

var reverseList = function(head) {
	var pivot = head, frontier = null; //3 pointers
	if(pivot === null || pivot.next === null){
		return head;
	}
	while(pivot.next !== null){
		frontier = pivot.next;
		pivot.next = pivot.next.next;
		frontier.next = head;
		head = frontier;
	}
	return head;
};

//recursive - still pending
