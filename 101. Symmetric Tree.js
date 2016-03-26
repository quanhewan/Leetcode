101. Symmetric Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 //recursively
var isSymmetric = function(root) {
    if(root === null || (root.left === null && root.right === null)){
    	return true;
    }

    function isMirror(nodeA, nodeB){
    	if(nodeA === null && nodeB === null){
    		return true;
    	} 
    	if(nodeA === null || nodeB === null){
    		return false;
    	}
    	return(nodeA.val === nodeB.val && isMirror(nodeA.left, nodeB.right) && isMirror(nodeA.right, nodeB.left));
    }

    return isMirror(root.left, root.right);
};