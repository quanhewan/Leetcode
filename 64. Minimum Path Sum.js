64. Minimum Path Sum 
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	var rows = grid.length;
	var cols = grid[0].length;
	if(rows === 0 || cols === 0){
		return 0;
	}

	var result = [];
	var initArr = Array(cols).fill(0);
	for(var i = 0; i < rows; i++){
		result.push(initArr);
	}
	result[0][0] = grid[0][0];

	for(var y = 0; y < rows; y ++){
		for(var x = 0; x < cols; x++){
		    if(x === 0 && y === 0){
		        continue;
		    }
			if(y === 0){
				result[y][x] = result[y][x-1] + grid[y][x];
			} else if (x === 0){
				result[y][x] = result[y-1][x] + grid[y][x];
			} else {
				result[y][x] = Math.min(result[y][x-1], result[y-1][x]) + grid[y][x];
			}
		}
	}

	return result[rows-1][cols-1];

};