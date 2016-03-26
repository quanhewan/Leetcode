124. Binary Tree Maximum Path Sum
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
    var Result = function(singlePath, maxPath){
    	this.singlePath = singlePath;
    	this.maxPath = maxPath;
    };

    function helper(root){
    	if(root === null){
    		return new Result(0, -Infinity);
    	}

    	var left = helper(root.left);
    	var right = helper(root.right);

    	var singlePath = Math.max(Math.max(left.singlePath, right.singlePath) + root.val, 0);
    	var maxPath = Math.max(left.maxPath, right.maxPath, left.singlePath + right.singlePath + root.val)

    	return new Result(singlePath, maxPath);
    }

    return helper(root).maxPath;
};