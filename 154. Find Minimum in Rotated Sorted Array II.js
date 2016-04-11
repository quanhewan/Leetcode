154. Find Minimum in Rotated Sorted Array II
/**
 * @param {number[]} nums
 * @return {number}
 */

 //find the first minimum
var findMin = function(nums) {
    var start = 0;
    var end = nums.length - 1;

    while(start + 1 < end){
        var mid = Math.floor((start + end) / 2);
        if(nums[mid] < nums[mid - 1] && nums[mid] <= nums[mid + 1]){
            return nums[mid];
        } else if(nums[start] === nums[end] && nums[mid] === nums[end]){
        	start = start + 1; // can be optimized?
        } else if(nums[mid] <= nums[end]){
            end = mid;
        } else {
            start = mid;
        }
    }

    if(nums[start] < nums[end]){
        return nums[start];
    } else {
        return nums[end];
    }
};