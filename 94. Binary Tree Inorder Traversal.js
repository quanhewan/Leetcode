94. Binary Tree Inorder Traversal
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
var inorderTraversal = function(root) {
    var stack = [];
    var result = [];
    var currentNode = root;

    if(root === null){
    	return result;
    }


    while(currentNode !== null || stack.length !== 0){
    	//pushing all left nodes into stack
    	while(currentNode !== null){
    		stack.push(currentNode);
    		currentNode = currentNode.left;
    	}

    	//start poping left nodes one by one
    	currentNode = stack.pop();
    	result.push(currentNode.val);
    	currentNode = currentNode.right; //cannot check currentNode.right !== null; intential reset.
    }

    return result;
};