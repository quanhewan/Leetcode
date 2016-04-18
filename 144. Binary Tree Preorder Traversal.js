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
var preorderTraversal = function(root) {
	var result = [];
	var stack = [];
	var currentNode;

	if(root === null){
		return result;
	}

	stack.push(root);

	while(stack.length !== 0){
		currentNode = stack.pop();
		result.push(currentNode.val);
		if(currentNode.right !== null){
			stack.push(currentNode.right);
		}
		if(currentNode.left !== null){
			stack.push(currentNode.left);
		}
	}

	return result;
};