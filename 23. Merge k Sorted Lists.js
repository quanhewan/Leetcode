23. Merge k Sorted Lists
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    function mergeTwo(headA, headB){
    	var dummy = new ListNode(0);
    	var head = dummy;
    	while(headA !== null || headB !== null){
    		if(headA !== null && (headB === null || headA.val < headB.val)){
    			head.next = headA;
    			headA = headA.next;
    		} else {
    			head.next = headB;
    			headB = headB.next;
    		}
    		head = head.next;
    	}
    	return dummy.next;
    }

    while(lists.length > 1){
    	var length = lists.length;
    	for(var i = 0, j = length - 1; i < j; i++, j--){
    		lists.push(mergeTwo(lists[i], lists[j]));
    	}
    	if(length % 2 === 1){
    		lists.push(lists[i]);
    	}
    	lists.splice(0, length);
    }
    return lists[0] || null;
};