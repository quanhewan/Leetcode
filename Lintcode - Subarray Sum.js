Subarray Sum

var sumZero(array){
	var map = {};
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		sum += array[i];
		if(sum === 0){
			return [0, i];
		} else if(map[sum]){
			return [map[sum], i];
		} else {
			map[sum] = i + 1;
		}
	}
}