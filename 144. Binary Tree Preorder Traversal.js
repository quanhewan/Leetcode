144. Binary Tree Preorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //Recursive
var preorderTraversal = function(root) {
	if(root === null){
		return [];
	}
    return [root.val].concat(preorderTraversal(root.left), preorderTraversal(root.right));
};

//iterative
