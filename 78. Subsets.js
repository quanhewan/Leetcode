78. Subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort(function(a,b){return a - b;});

    function subsetFunction(nums){
	    var length = nums.length;
	    if(length === 0){
	    	return [[]];
	    }

		var lastSolution = subsetFunction(nums.slice(0, length - 1));
		var lastlength = lastSolution.length;
		for(var i = 0; i < lastlength; i++){
			lastSolution.push(lastSolution[i].concat(nums[length - 1]));
		}

		return lastSolution;
	}

	return subsetFunction(nums);
};