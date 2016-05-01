138. Copy List with Random Pointer
/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

 //cannot pass, dont know why
var copyRandomList = function(head) {
	if(head === null){
		return null;
	}

    var start = head;
    var map = {};

    //first round to map all lists
    while(start !== null){
    	map[start] = new RandomListNode(start.label); 
    	start = start.next;
    }

    //second round to add random node
    for(var node in map){
    	if(node.next !== null){
    		map[node].next = map[node.next];
    	}
    	if(node.random !== null){
    		map[node].random = map[node.random];
    	}
    	//map[node].next = node.next === null ? null : map[node.next];
   		//map[node].random = node.random === null ? null : map[node.random];
    }

    return map[head];
};