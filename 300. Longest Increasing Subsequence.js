300. Longest Increasing Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */

 //ver 1. O(n2)
var lengthOfLIS = function(nums) {
	if(nums.length === 0){
		return 0;
	}
    var length = Array(nums.length).fill(1); // intiate result

    for(var i = 1; i < nums.length; i++){
    	for (var j = 0; j < i; j++){
    		if(nums[i] > nums[j] && length[i] < length[j] + 1){
    			length[i] = length[j] + 1;
    		}
    	}
    }

    return Math.max.apply(null, length);
};


 //ver 2. O(nlogn)
 //need to think...