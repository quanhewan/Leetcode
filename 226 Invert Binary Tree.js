226. Invert Binary Tree

//128ms 60.98%

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if(root === undefined || root === null){
		return root;
	}
    var helperNode = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = helperNode;
	return root;

};