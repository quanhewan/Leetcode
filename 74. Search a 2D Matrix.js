74. Search a 2D Matrix
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var rows = matrix.length;
    var cols = matrix[0].length;
    if(rows === 0 || cols === 0){
    	return false;
    }

    var start = 0;
    var end = rows * cols - 1;
    while(start + 1 < end){
    	var mid = Math.floor((start + end) / 2);
    	var midValue = getElFromMatrix(mid);
    	if(target === midValue){
    		return true;
    	} else if(target < midValue){
    		end = mid;
    	} else {
    		start = mid;
    	}
    }

    if(target === getElFromMatrix(start)){
    	return true;
    } else if(target === getElFromMatrix(end)){
    	return true;
    } else {
    	return false;
    }

    function getElFromMatrix(num){
    	var row = Math.floor(num / cols);
    	var col = Math.floor(num % cols);
    	return matrix[row][col];
    }
};