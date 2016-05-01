53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	if(nums.length === 0){
		return 0;
	}
	var max = -Infinity;
	var current = -Infinity;
	for(var i = 0; i < nums.length; i++){
		current = Math.max(current + nums[i], nums[i]);
		max = Math.max(max, current);
	}
	return max;
}; 