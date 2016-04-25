143. Reorder List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
	function reverse(head){
		var newHead = null;
		while(head !== null){
			temp = head.next;
			head.next = newHead;
			newHead = head;
			head = temp;
		}
		return newHead;
	}

	function merge(head1, head2){
		var index = 0;
		var dummy = new ListNode(0);
		while(head1 !== null && head2 !== null){
			if(index % 2 === 0){
				dummy.next = head1;
				head1 = head1.next;
			} else {
				dummy.next = head2;
				head2 = head2.next;
			}
			dummy = dummy.next;
			index++;
		}
		if(head1 !== null){
			dummy.next = head1;
		} else {
			dummy.next = head2;
		}
	}

	function findMiddle(head){
		var slow = head, fast = head;
		while(fast !== null && fast.next !== null){
			slow = slow.next;
			fast = fast.next.next;
		}
		return slow;
	}

	//final bootstrap
	if(head === null || head.next === null){
		return;
	}
	var mid = findMiddle(head);
	var tail = reverse(mid.next);
	mid.next = null;

	merge(head, tail);
};