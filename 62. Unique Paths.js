62. Unique Paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var paths = [];
    var initArr = Array(m).fill(1);
    for(var i = 0; i < n; i++){
    	paths.push(initArr);
    }

    for(var y = 1; y < n; y++){
    	for(var x = 1; x < m; x++){
    		paths[y][x] = paths[y][x-1] + paths[y-1][x];
    	}
    }

    return paths[n-1][m-1];

};