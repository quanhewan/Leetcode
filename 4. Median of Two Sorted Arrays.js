4. Median of Two Sorted Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var length = nums1.length + nums2.length;
    if(length % 2 === 1){
    	return findKth(nums1, 0, nums2, 0, Math.floor(length / 2) + 1);
    } else {
    	return (findKth(nums1, 0, nums2, 0, Math.floor(length / 2))
    		+ findKth(nums1, 0, nums2, 0, Math.floor(length / 2) + 1)) / 2;
    }


    function findKth(A, A_start, B, B_start, k){
    	if(A.length <= A_start){
    		return B[B_start + k - 1];
    	} else if(B.length <= B_start){
    		return A[A_start + k - 1];
    	}

    	if(k === 1){
    		return Math.min(A[A_start], B[B_start]);
    	}

    	var halfK = Math.floor(k/2);
    	A_halfK = A[A_start + halfK - 1] === undefined ? Infinity : A[A_start + halfK - 1];
    	B_halfK = B[B_start + halfK - 1] === undefined ? Infinity : B[B_start + halfK - 1];

    	if(A_halfK < B_halfK){
    		return findKth(A, A_start + halfK, B, B_start, k - halfK);
    	} else {
    		return findKth(A, A_start, B, B_start + halfK, k - halfK);
    	}
    }
};