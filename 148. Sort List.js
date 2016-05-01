148. Sort List
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
 // 1. merge sort
var sortList = function(head) {
    function merge(left, right){
    	if(left === null && right === null){
    		return null;
    	} else if(left === null){
    		return right;
    	} else if(right === null){
    		return left;
    	}

    	var dummy = new ListNode(0);
    	var head = dummy;
    	while(left !== null || right !== null){
    		if(left !== null && (right === null || left.val < right.val)){
    			head.next = left;
    			left = left.next;
    		} else {
    			head.next = right;
    			right = right.next;
    		}
    		head = head.next;
    	}
    	return dummy.next;
    }

    if(head === null || head.next === null){
    	return head;
    }

    var slow = head;
    var fast = head.next;

    while(fast !== null && fast.next !== null){
    	slow = slow.next;
    	fast = fast.next.next;
    }

    var left = head;
    var right = slow.next;
    slow.next = null; // separate left and right

    left = sortList(left);
    right = sortList(right);

    return merge(left, right);
};

//2. quick sort
// time exceed
var sortList = function(head) {
    if(head === null || head.next === null){
    	return head;
    }

    var dummy = new ListNode(0);
    dummy.next = head;

    var preSlow = dummy;
    var slow = dummy.next;
    var fast = dummy.next;

    while(fast !== null && fast.next !== null){
    	preSlow = preSlow.next;
    	slow = slow.next;
    	fast = fast.next.next;
    }

    preSlow.next = null;

    var left = head;
    var right = slow.next;
    slow.next = null;
    leftHead = dummy;
    rightHead = slow;


	while(left !== null){
    	if(left.val < slow.val){
    		leftHead.next = left;
    		leftHead = leftHead.next;
    	} else {
    		rightHead.next = left;
    		rightHead = rightHead.next;
    	}
    	left = left.next;
    }


    while(right !== null){
    	if(right.val < slow.val){
    		leftHead.next = right;
    		leftHead = leftHead.next;
    	} else {
    		rightHead.next = right;
    		rightHead = rightHead.next;
    	}
    	right = right.next;
    }

    leftHead.next = null;
    rightHead.next = null;

    dummy.next = sortList(dummy.next);
    slow.next = sortList(slow.next);

    var x = dummy;
    while(x.next !== null){
    	x = x.next;
    }
    x.next = slow;

    return dummy.next;
};