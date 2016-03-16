Lintcode - Binary Tree Maximum Path Sum II

// Given a binary tree, find the maximum path sum from root.
// The path may end at any node in the tree.
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
var maxPathSum = function(root) {
    if (root === null){
    	return 0;
    }
    var left = maxPathSum(root.left);
    var right = maxPathSum(root.right);
    //if path sum > 0, add to max path
    return Math.max(left, right) > 0 ? root.val + Math.max(left, right) : root.val; 
};