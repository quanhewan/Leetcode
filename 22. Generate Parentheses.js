22. Generate Parentheses
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    function addParen(arr, left, right, str){
    	if(left < 0 || right < left){
    		return;
    	}
    	if(left === 0 && right === 0){
    		arr.push(str);
    	} else {
    		if(left > 0){
    			addParen(arr, left - 1, right, str + '(');
    		} 
    		if(right > left){
    			addParen(arr, left, right - 1, str + ')');
    		}
    	}
    }

    var result = [];
    var str = '';
    addParen(result, n, n, str);
    return result;
};