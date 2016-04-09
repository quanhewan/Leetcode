90. Subsets II
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Iteration solution: 
// 1. If nums[i] !== nums[i-1], iterate from beginning
// 2. If nums[i] === nums[i-1], iterate from the last start of nums[i-1]


var subsetsWithDup = function(nums) {
    nums.sort(function(a,b){return a - b;});

    var result = [[]];
    var length = nums.length;
    var start, resultSize, currentResult;

    for(var i = 0; i < length; i++){
    	if(i === 0 || nums[i] !== nums[i - 1]){
    		start = 0;
    	}
    	resultSize = result.length;
    	for(var j = start; j < resultSize; j++){
    		currentResult = result[j].concat(nums[i]);
    		result.push(currentResult);
    	}
    	start = resultSize;
    }

    return result;
};