285. Inorder Successor in BST
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
	var successor = null;
    while(root !== null && root.val !== p.val){
    	if(root.val > p.val){
    		successor = root;
    		root = root.left;
    	} else {
    		root = root.right;
    	}
    }

    if(root === null){
    	return null;
    } else if(root.right === null){
    	return successor;
    } else { // if root.right !== null
    	root = root.right;
    	while(root.left !== null){
    		root = root.left;
    	}
    	return root;
    }

};
