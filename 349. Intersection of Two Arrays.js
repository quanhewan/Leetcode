/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 // Challenge: Use three different algorithms
 // 1. Hash map
var intersection = function(nums1, nums2) {
  var map = {};
  var result = [];
  for(var i = 0; i < nums1.length; i++){
    if(!map[nums1[i]]){
      map[nums1[i]] = true;
    }
  }
  for(var j = 0; j < nums2.length; j++){
    if(map[nums2[j]]){
      result.push(nums2[j]);
      map[nums2[j]] = false;
    }
  }

  return result;
};
