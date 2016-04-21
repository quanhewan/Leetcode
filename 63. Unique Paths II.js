63. Unique Paths II 
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	var rows = obstacleGrid.length;
	var cols = obstacleGrid[0].length;
	if(cols === 0 || rows === 0 || obstacleGrid[0][0] === 1){
		return 0;
	}

    var paths = [[]];
    var initCol = 1;
    var initRow = 1;

    //first, initiate the first row
    for(var i = 0; i < cols; i++){
    	if(initRow === 1 && obstacleGrid[0][i] === 1){
    		initRow = 0;
    	}
    	paths[0][i] = initRow;
    }

    //second, initiate the first column
    for(var j = 1; j < rows; j++){
    	if(initCol === 1 && obstacleGrid[j][0] === 1){
    		initCol = 0;
    	}
    	paths.push([initCol]);
    }

    //fill result with DP
    for(var y = 1; y < rows; y++){
    	for(var x = 1; x < cols; x++){
    		if(obstacleGrid[y][x] === 1){
    			paths[y][x] = 0;
    		} else {
	    		paths[y][x] = paths[y][x-1] + paths[y-1][x];
    		}
    	}
    }

    return paths[rows-1][cols-1];

};