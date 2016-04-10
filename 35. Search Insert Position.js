35. Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	if(nums.length === 0){
		return 0;
	}
	var start = 0,
		end = nums.length - 1;
	var mid;
	while(start + 1 < end){
		mid = Math.floor((start + end) / 2);
		if(target > nums[mid]){
			start = mid;
		} else {
			end = mid;
		}
	}
	if(target <= nums[start]){
		return start;
	} else if (target > nums[start] && target <= nums[end]){
		return start + 1;
	} else {
		return end + 1;
	}
};