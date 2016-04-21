98. Validate Binary Search Tree
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
var isValidBST = function(root) {
    function helperBST(node, minVal, maxVal){
    	if(node === null){
    		return true;
    	} else if (node.val <= minVal || node.val >= maxVal) {
    		return false;
    	} else {
    		return helperBST(node.left, minVal, node.val) 
    		  && helperBST(node.right, node.val, maxVal);
    	}
    }

    return helperBST(root, -Infinity, Infinity);
}; 