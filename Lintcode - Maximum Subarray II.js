 Maximum Subarray II

 function maxTwoSubArrays(nums){
 	if(nums.length < 2){
 		return false;
 	}
 	//1. max array on left side
 	var leftMaxArr = [];
 	var leftMax = -Infinity;
 	var leftCur = -Infinity;
 	for(var i = 0; i < nums.length - 1; i++){
 		leftCur = Math.max(nums[i] + leftCur, nums[i]);
 		leftMax = Math.max(leftCur, leftMax);
 		leftMaxArr.push(leftMax);
 	}

 	var rightMaxArr = [];
 	var rightMax = -Infinity;
 	var rightCur = -Infinity;
 	for(var j = nums.length - 1; j > 1; j--){
 		rightCur = Math.max(nums[j] + rightCur, nums[j]);
 		rightMax = Math.max(rightCur, rightMax);
 		rightMaxArr.unshift(rightMax);
 	}

 	var result = -Infinity;
 	for(var k = 0; k < leftMaxArr.length; k++){
 		result = Math.max(result, leftMaxArr[k], rightMaxArr[k]);
 	}

 	return result;
 }