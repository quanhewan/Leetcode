110. Balanced Binary Tree
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
var isBalanced = function(root) {
	function helper(node){
		if(node === null){
			return {
				isBalanced: true,
				depth: 0
			};
		}

		var left = helper(node.left);
		var right = helper(node.right);
		var result = {};
		result.isBalanced = left.isBalanced && right.isBalanced 
			&& Math.abs(left.depth - right.depth) <= 1;
		result.depth = Math.max(left.depth, right.depth) + 1;

		return result;
	}

	return helper(root).isBalanced;
    
};