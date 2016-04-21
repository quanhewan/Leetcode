70. Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	var result = [];
	result[0] = 1; // zero step
	result[1] = 1; // one step
	for(var i = 2; i <= n; i++){
		result[i] = result[i-1] + result[i-2];
	}
	return result[n];
};