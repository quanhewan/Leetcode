237. Delete Node in a Linked List

//132ms 85%

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
	if(node === null || node === undefined){
		return node;
	}
	node.val = node.next.val;
	node.next = node.next.next || null;
};