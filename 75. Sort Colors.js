75. Sort Colors
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	if(nums.length <= 1){
		return;
	}
    var pointer0 = 0;
    var pointer2 = nums.length - 1;

    for(var i = 0; i <= pointer2; i++){
    	if(nums[i] === 0){
    		swap(nums, pointer0, i);
    		pointer0 ++;
    	} 
    	if(nums[i] === 2){
    		swap(nums, pointer2, i);
    		pointer2 --;
    		i--;
    	}
    }

    function swap(nums, i, j){
    	var temp = nums[i];
    	nums[i] = nums[j];
    	nums[j] = temp;
    }
};