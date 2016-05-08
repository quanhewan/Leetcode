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

// Recursive solution:
// Imagine the subsets as a binary tree

var subsetsWithDup = function(nums) {
    var result = [];
    var list = [];
    nums.sort(function(a, b){return a - b;});
    subsetsHelper(result, list, nums, 0);
    return result;

    function subsetsHelper(result, list, nums, pos){
        result.push(list.slice()); // important! add a duplicate of list
        for(var i = pos; i < nums.length; i++){
            if(i !== pos && nums[i] === nums[i - 1]){
                continue;
            }
            var length = list.length;
            list.push(nums[i]);
            subsetsHelper(result, list, nums, i+1);
            list.length = length; // remove the added list
        }
    }
};