55. Jump Game
/**
 * @param {number[]} nums
 * @return {boolean}
 */

 //1. Dynamic programming
var canJump = function(nums) {
    var result = [];
    result[0] = true;
    for(var i = 1; i < nums.length; i++){
    	for(var j = 0; j < i; j++){
    		if(result[j] && (j + nums[j]) >= i){
    			result[j] = true;
    			break;
    		}
    	}
    }

    return result[nums.length - 1];
};

//2. Greedy
var canJump = function(nums) {
	var maxIndex = 0;
    for(var i = 0; i < nums.length; i++){
    	if(maxIndex < i){
    		return false;
    	}
    	maxIndex = Math.max(maxIndex, i + nums[i]);
    	if(maxIndex >= nums.length - 1){
    		return true;
    	}
    }
    return maxIndex >= nums.length - 1;
};