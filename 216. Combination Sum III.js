216. Combination Sum III
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    var min = k * ( k - 1 ) / 2;
    var result = [];
    if(n < min){
    	return result;
    }
    
};