100. Same Tree

//108ms 72.22%

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
	if(p === null && q === null){
		return true;
	} else if( p === null || q === null || p.val !== q.val){
    	return false;
    } else {
    	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};