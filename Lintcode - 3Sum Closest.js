3Sum Closest

function threeSumClosest(nums, target){
	//1. sort the numbers
	nums.sort(function(a, b){return a-b;});

	//2. Use 2 pointers for each number
	var closestSum = Infinity;
	for(var ind = 0; ind < nums.length; ind++){
		var i = ind + 1, j = nums.length - 1;
		while(i < j){
			var currSum = nums[ind] + nums[i] + num[j];
			if (currSum === target){
				return target;
			} else if (currSum < target){
				i++;
			} else {
				j--;
			}
		}
		if(Math.abs(currSum - target) < Math.abs(closestSum - target)){
			closestSum = currSum;
		}
	}

	return closestSum;
}