326. Power of Three
/**
 * @param {number} n
 * @return {boolean}
 */

 //1. with loop
var isPowerOfThree = function(n) {
	if(n <= 0){
		return false;
	}
    while(n > 1){
    	if(n % 3 !== 0){
    		return false;
    	}
    	n = n / 3;
    }
    return true;
};

//2. without loop
var isPowerOfThree = function(n) {
	if(n <= 0){
		return false;
	} else {
		return (1162261467 % n === 0); // max power of 3 for 32-bit integer
	}
};

