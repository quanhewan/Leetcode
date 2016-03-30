337. House Robber III

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
    function robByNode(node){
    	var result = {
    		withNode: 0,
    		withoutNode: 0
    	};
    	if(node === null){
    		return result;
    	}
    	var left = robByNode(node.left);
    	var right = robByNode(node.right);
    	result.withNode = left.withoutNode + right.withoutNode + node.val;
    	result.withoutNode = Math.max(left.withNode + right.withNode, 
    		left.withNode + right.withoutNode, 
    		left.withoutNode + right.withNode,
    		left.withoutNode + right.withoutNode);
    	return result;
    }
    var result = robByNode(root);
    return Math.max(result.withNode, result.withoutNode);
};