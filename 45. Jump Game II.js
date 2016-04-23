45. Jump Game II
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 //1. Dynamic programming
var jump = function(nums) {
    var result = [];
    result[0] = 0;
    for(var i = 0; i < nums.length; i++){
    	var currentJump = result[i] + 1;
    	for(var j = 1; j <= nums[i] && j < nums.length; j++){
    		var minJump = result[i + j] || Infinity;
    		if(currentJump < minJump){
    			result[i + j] = currentJump;
    		}
    	}
    }

    return result[nums.length - 1];
};


//2. Greedy
var jump = function(nums) {
	
};
