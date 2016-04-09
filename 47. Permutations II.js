47. Permutations II

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var result = [[]];
    var length = nums.length;
    nums.sort(function(a,b){return a - b;});

    for (var i = 0; i < length; i++){
    	var currentLen = result.length;
    	var currentNum = nums[i];
    	for(var j = 0; j < currentLen; j++){
    		var currentNode = result[j];
    		for(var k = 0; k <= i; k++){
    			if(i === 0 || nums[i] !== nums[i - 1] 
    				|| currentNode.slice(k).indexOf(currentNum) === -1){
    				result.push(currentNode.slice(0, k).concat(currentNum, currentNode.slice(k)));
    			}
		    }
		}
	    result.splice(0, currentLen);
	}

    return result;
};

