107. Binary Tree Level Order Traversal II
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    var result = [];
    if(root === null){
    	return result;
    }
    var queue = [root];
    var queue_val = [root.val];
    var length;
    
	while(queue.length > 0){
		length = queue.length;
		for(var i=0; i<length; i++){
			if(queue[i].left !== null){
				queue.push(queue[i].left);
				queue_val.push(queue[i].left.val);
			}
			if(queue[i].right !== null){
				queue.push(queue[i].right);
				queue_val.push(queue[i].right.val);
			}
		}
		queue.splice(0, length);
		result.unshift(queue_val.splice(0, length)); 
    }

    return result;
};