347. Top K Frequent Elements 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = {};
    for(var i = 0; i < nums.length; i++){
    	if(!map[nums[i]]){
    		map[nums[i]] = 1;
    	} else {
    		map[nums[i]]++;
    	}
    }

    var result = [];
    for(var el in map){
    	result.push({
    		el: parseInt(el),
    		count: map[el]
    	});
    }

    result.sort(function(a,b){return b.count - a.count;});
    return result.slice(0, k).map(function(obj){return obj.el});
};