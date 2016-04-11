34. Search for a Range
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	var start = 0;
	var end = nums.length - 1;
	var mid;
	var result = [];

//find the starting point
	while(start + 1 < end){
		mid = Math.floor((start + end) / 2);
		if(nums[mid] === target && nums[mid - 1] < target){
			result.push(mid);
			break; // need to break the loop when no return value at this step
		} else if(nums[mid] < target){
			start = mid;
		} else {
			end = mid;
		}
	}

	if(result.length === 0){
		if(nums[start] === target){
			result.push(start);
		} else if (nums[end] === target){
			result.push(end);
		} else{
			return [-1, -1];
		}
	}

//find the ending point
	end = nums.length - 1;
	while(start + 1 < end){
		mid = Math.floor((start + end) / 2);
		if(nums[mid] === target && nums[mid + 1] > target){
			result.push(mid);
			break;
		} else if(nums[mid] > target){
			end = mid;
		} else {
			start = mid;
		}
	}

	if(result.length === 1){
		if(nums[end] === target){
			result.push(end);
		} else if (nums[start] === target){
			result.push(start);
		} else{
			return [-1, -1];
		}
	}

	return result;

};