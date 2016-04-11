162. Find Peak Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    var start = 0;
    var end = nums.length - 1;

    while(start + 1 < end){
    	var mid = Math.floor((start + end) / 2);
    	if(nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]){
    		return mid;
    	} else if (nums[mid] > nums[mid - 1]){
    		start = mid;
    	} else {
    		end = mid;
    	}
    }

    if(nums[start] < nums[end]){
    	return end;
    } else {
    	return start;
    }
};