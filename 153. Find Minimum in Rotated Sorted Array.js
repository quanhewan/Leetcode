153. Find Minimum in Rotated Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
 // recursive
var findMin = function(nums) {
	if(nums.length < 2){
		return nums[0];
	}
	if(nums.length === 2){
		return Math.min(nums[0], nums[1]);
	}
    var length = nums.length;
    var halfLen = Math.floor(length / 2);
    if(nums[halfLen] < nums[halfLen - 1] && nums[halfLen] < nums[halfLen + 1]){
    	return nums[halfLen];
    }
    if(nums[0] > nums[halfLen - 1]){
    	return findMin(nums.splice(0, halfLen));
    }
    if(nums[halfLen] > nums[length]){
    	return findMin(nums.splice(halfLen));
    }
    return nums[0];
};

// 2016.4.10 iterative
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;

    while(start + 1 < end){
        var mid = Math.floor((start + end) / 2);
        if(nums[mid] < nums[mid - 1] && nums[mid] < nums[mid + 1]){
            return nums[mid];
        } else if(nums[mid] < nums[end]){
            end = mid;
        } else{
            start = mid;
        }
    }

    if(nums[start] < nums[end]){
        return nums[start];
    } else {
        return nums[end];
    }
};
