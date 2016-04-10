234. Palindrome Linked List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */


var isPalindrome = function(head) {
    if(head === null || head.next === null){
    	return true;
    }
    var bit = head.val;
    var p1 = head;
    var p2 = head;
    var odd = true;
    while(p1.next !== null){
    	p1 = p1.next;
    	bit ^= p1.val;
    	if(!odd){
    		p2 = p2.next;
    	}
    	odd = !odd;
    }
    return odd ? bit === p2.val : bit === 0;
};