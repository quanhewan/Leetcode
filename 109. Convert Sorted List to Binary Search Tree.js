109. Convert Sorted List to Binary Search Tree
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null){
    	return null;
    } else if(head.next === null){
    	return new TreeNode(head.val);
    }

    var dummy = new ListNode(0);
    dummy.next = head;
    var preSlow = dummy;
    var slow = head;
    var fast = head;
    while(fast !== null && fast.next !== null){
    	preSlow = preSlow.next;
    	slow = slow.next;
    	fast = fast.next.next;
    }

    var left = head;
    var right = slow.next;

    preSlow.next = null; // separate left and right
    slow.next = null;
    
    var treeHead = new TreeNode(slow.val);
    treeHead.left = sortedListToBST(left);
    treeHead.right = sortedListToBST(right);
    return treeHead;
};