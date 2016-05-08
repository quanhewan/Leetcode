1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i < nums.length; i++){
    	currNum = nums[i];
    	if(map[currNum] !== undefined){
    		return [map[currNum], i];
    	} else {
    		map[target - currNum] = i;
    	}
    }
};