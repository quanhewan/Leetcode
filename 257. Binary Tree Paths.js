257. Binary Tree Paths
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(root === null){
    	return [];
    }
    var string = root.val.toString();
    if(root.left === null && root.right === null){
    	return [string];
    }
    var paths = binaryTreePaths(root.right).concat(binaryTreePaths(root.left));
    for(var i = 0; i < paths.length; i++){
    	paths[i] = string + "->" + paths[i];
    }
    return paths;
};