46. Permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length < 2){
    	return [nums];
    }

    function permuteGen(array, num){
    	var result = [];
    	for(var i = 0; i < array.length; i ++){
    		for(var j = 0; j <= array[i].length; j++){
    			result.push(array[i].slice(0, j).concat([num], array[i].slice(j)));
    		}
    	}
    	return result;
    }

    var num = nums.pop();
    return permuteGen(permute(nums), num);
};