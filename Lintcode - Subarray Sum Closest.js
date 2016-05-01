Subarray Sum Closest
var subSumClosest(array){
	if(array.length === 0){
		return new Array(2);
	} else if (array.length === 1){
		return [0,0];
	}

	var sumMap = [];
	var sum = 0;

	sumMap.push({
		sum: 0,
		ind: -1
	});

	for(var i = 0; i < array.length; i++){
		sum += array[i];
		if(sum === 0){
			return [0, i];
		}
		sumMap.push({
			sum: sum,
			ind: i
		});
	}

	sumMap.sort(function(a, b){
		return a.sum - b.sum;
	}); // can be replaced with a merge/quick sort

	var minRange = [0, sumMap[0].ind];
	var minDiff = Math.abs(sumMap[0].sum);
	for(var j = 1; j < sumMap.length; j++){
		var curDiff = Math.abs(sumMap[j].sum - sumMap[j-1].sum);
		if(curDiff < minDiff){
			minDiff = curDiff;
			minRange[0] = Math.min(sumMap[j].ind, sumMap[j].ind) + 1;
			minRange[1] = Math.max(sumMap[j].ind, sumMap[j].ind);
		}
	}

	return minRange;
}