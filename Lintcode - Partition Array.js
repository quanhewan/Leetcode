Partition Array

function partition(nums, k){
	var p1 = 0;
	var p2 = nums.length - 1;
	for(p1; p1 <= p2; p1++){
		if(nums[p1] < k){
			continue;
		} 
		while(p2 >= p1 && nums[p2] >= k){
			p2--;
		}

		if(p2 > 0 && p1 < p2) {
			var temp = nums[p1];
			nums[p1] = nums[p2];
			nums[p2] = temp;
			p2--;
		}
	}
	return j + 1;

}