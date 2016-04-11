33. Search in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var start = 0;
    var end = nums.length - 1;

    while(start + 1 < end){
    	var mid = Math.floor((start + end) / 2);
    	if(nums[mid] === target){
    		return mid;
    	} else if (nums[mid] < nums[end]){
    		if(target <= nums[end] && target > nums[mid]){
    			start = mid;
    		} else {
    			end = mid;
    		}
    	} else {
    		if(target >= nums[start] && target < nums[mid]){
    			end = mid;
    		} else {
    			start = mid;
    		}
    	}
    }

    if(nums[start] === target){
    	return start;
    } else if(nums[end] === target){
    	return end;
    } else {
    	return -1;
    }
};