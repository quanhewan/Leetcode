//Nim Game
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return Boolean(n % 4);
}

//Add Digits
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
	var result = 0;
	do{ result += num % 10;
		num = Math.floor(num / 10);
	} while (num > 0);
	if(result >= 10){
		result = addDigits(result);
	}
	return result;
};

//O(1)solution
var addDigits = function(num){
    return (n===0 ? 0 : ( n%9 || 9 ));
}

//283.Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	var length = nums.length;
    for(var i = 0; i < length; i++){
    	if(nums[i] === 0){
    		nums.splice(i,1);
        	nums.push(0);
        	i--;
        	length --;
    	}
    }
};


//Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var length = nums.length;
	if(length === 1){
		return false;
	}
    for(i=0; i<length-1; i++){
    	for(j=i+1;j<length;j++ ){
    		if(nums[i]===nums[j]){
    			return true;
    		}
    	}
    }
    return false;
};

var containsDuplicate = function(nums) {
	nums.sort();
	for(i=0;i<nums.length-1;i++){
		if(nums[i] === nums[i+1]){
			return true;
		}
	}
	return false;
};

//Excel Sheet column number
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
	//assign A -> 1, B -> 2, ..., Z -> 26
	function letterToNumber(letter){
		return letter.charCodeAt(0) - 64;
	}
    var array = s.split("").reverse();
    var value = 0;
    for(i=0; i<array.length; i++){
    	value += letterToNumber(array[i])*Math.pow(26,i);
    }
    return value;
};

//valid anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	if(s.length !== t.length){
		return false;
	}
    s=s.split("").sort();
    t=t.split("").sort();
    for (var i=0;i<s.length; i++){
    	if(s[i] !== t[i]){
    		return false;
    	}
    }
    return true;
};

//majority element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length/2)];

};


//Climbing Stairs
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    function combination(a,b){
        if(a === 0 || b === 0){
            return 1;
        }
        var up = 1;
        var down = 1;
        for(i=b; i>0; i--){
            up *= (a+i);
            down *= (i); 
        }
        return (up / down);
    }

    var result = 0;

    for(j=0; j<=n; j++){
        if((n-j)%2 === 0){
            result += combination(j, (n-j)/2);
        }
    }

    return result;

};


//Ugly number
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if(num === 0){
        return false;
    }
    function divideMultiTime(n, x){
        while(n%x === 0){
            n = n/x;
        }
        return n;
    }
    return divideMultiTime(divideMultiTime(divideMultiTime(num, 2), 3),5) === 1;
};

//Happy number

//Power of two
/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if(n <= 0){
        return false;
    }
    while(n%2 === 0){
        n=n/2;
    }
    return (n===1);
};

//remove element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var length = nums.length;
    for(i=0; i<length; i++){
        if (nums[i] === val){
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};

//198. House Robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length < 3){
        return Math.max(nums[0], nums[1]) || nums[0] || 0;
    }
    var max = 0;
    var temp = 0;
    var temp1 = 0;
    var robbed = false;
    for(i=0; i<nums.length; i++){
        if(nums[i] + temp > max){
            temp1 = max;
            max = temp + nums[i];
            temp = temp1;
            robbed = true;
        } else if(robbed){
            temp = max;
            robbed = false;
        } else {
            temp = max;
            max += nums[i];
            robbed = true;
        }
    }
    return max;
};

//DP solution
var rob = function(nums) {
    if(nums.length < 3){
        return Math.max(nums[0], nums[1]) || nums[0] || 0;
    }
    var money = [];
    money[0] = nums[0];
    money[1] = Math.max(nums[0], nums[1]);
    for(i=2; i<nums.length; i++){
        money[i] = Math.max(money[i-1], money[i-2]+nums[i]);
    }
    return money[nums.length-1];
};

//Plus one
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var length = digits.length;
    for (i=length-1; i>=0; i--){
        if(digits[i] !== 9){
            digits[i] += 1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits[0] = 0;
    digits.unshift(1);
    return digits;
};

//Pascal's triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0){
        return [];
    }
    var triangle = [];
    triangle[0] = [1];
    for(i=1; i<numRows; i++){
        triangle[i] = [];
        triangle[i][0] = 1;
        triangle[i][i] = 1;
        for(j=1; j<i; j++){
            triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
        }
    }
    return triangle;
};

//Factorial trailing Zeroes
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    if (n===0){return 0;}
    var result = 0;
    while (n>0){
        result += Math.floor(n/5);
        n=n/5;
    }
    return result;
};

//Pascal's triangle II
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var row = [1];

    for(var i = 1 ; i <= rowIndex ; i++) {
        for(var j = i; j > 0; j--) {
            if(j === i)
                row[j] = 1;
            else
                row[j] = row[j - 1] + row[j];
        }
    }
    return row;
};

//Palindrome number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return x.toString() === x.toString().split('').reverse().join('');
};


//Merge sorted array
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if(m === 0 || nums1.length === 0){
        nums1.splice(0, nums1.length);
        for(i=0; i<nums2.length; i++){
            nums1[i] = nums2[i];
        }
        return;
    } else if(n === 0 || nums2.length === 0){
        return;
    } else{
            if(nums1.length > m){
            nums1.splice(m, nums1.length);
        }
        nums = nums1.concat(nums2).sort(function(a,b){return a-b;});
        for(i=0; i<nums.length; i++){
            nums1[i] = nums[i];
        }
    }

};

//191. Number of 1 Bits
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var weight = 0;
    while(n>0){
        weight += n%2;
        n = parseInt(n/2);
    }
    return weight;
};

//Roman to integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var convertion = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var roman = s.split('').reverse();
    var len = roman.length;
    var int = convertion[roman[0]];
    for(var i=1; i<len; i++){
        if(convertion[roman[i]] < convertion[roman[i-1]]){
            int -= convertion[roman[i]];
        } else {
            int += convertion[roman[i]];
        }
    }
    return int;
};

//Happy number
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var map = {};
    var squareplus;
    while(!map[n]) {
        map[n] = true;
        squareplus = 0;
        while(n > 0) {
            squareplus += (n%10) * (n%10);
            n = Math.floor(n/10);
        }
        if(squareplus === 1) {
            return true;
        }
        n = squareplus;
    }
    return false;
};

//Reverse Bits
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var bits = [];
    var output = 0;
    var maxLen = 32;
    while(bits.length<maxLen){
        bits.push(n%2);
        n = Math.floor(n/2);
    }
    bits.reverse();
    for(i=0; i<bits.length; i++){
        output += bits[i]*Math.pow(2, i);
    }
    return output;
};

//Reverse Integer
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var x_arr = x.toString().split("");
    var negative = (x_arr[0]==='-');
    if(negative){
        x_arr.shift();
    }
    var x_reverse_abs = parseInt(x_arr.reverse().join(""));
    var output = negative ? -x_reverse_abs : x_reverse_abs;
    var limit32 = Math.pow(2, 31);
    if(output >= limit32 || output <= -limit32){
        return 0;
    } else {
        return output;
    }
};

//Valid Sudoku
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var map_horizontal = [];
    var map_vertical = [];
    var map_square = [];
    for(i=0; i<board.length; i++){
        for(j=0; j<9; j++){
            if(board[i][j] === '.'){continue;}
            if(!map_horizontal[i]){map_horizontal[i] = {};}
            if(!map_vertical[j]){map_vertical[j] = {};}
            var k = Math.floor(i/3) + Math.floor(j/3)*3; // location of 9-number cell
            if(!map_square[k]){
                map_square[k] = {};
            }
            if((map_horizontal[i][board[i][j]]) || (map_vertical[j][[board[i][j]]]) || (map_square[k][board[i][j]])){return false;}
            map_horizontal[i][board[i][j]] = true;
            map_vertical[j][board[i][j]] = true;
            map_square[k][board[i][j]] = true;
        }
    }
    return true;
};

//length of last word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var array = s.split(" ");
    var length = array.length;
    while (array[length-1] === ""){
        array.pop();
        length--;
    }
    return (array[length-1] ? array[length-1].length : 0);
};

//contains Duplicate II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var maps = {};
    for(i=0; i<nums.length; i++){
        if(maps[nums[i]] >= i-k){
            return true;
        }
        maps[nums[i]] = i;
    }
    return false;
};

//Rectangle Area
/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var leftx = Math.max(A, E);
    var rightx = Math.min(C, G);
    var uppery = Math.min(D, H);
    var lowery = Math.max(B, F);
    var overlapArea = Math.abs((leftx - rightx) * (uppery - lowery));
    if(leftx > rightx || uppery < lowery){
        overlapArea = 0;
    }
    var area = (C-A)*(D-B) + (G-E)*(H-F);
    return area - overlapArea;
};


//Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if ((s.length % 2) !== 0){return false;}
    var parentheses = {
        '(': ')', 
        '{': '}', 
        '[': ']'
    }
    var pairedArray = [];
    for(i=0; i<s.length; i++){
        if(parentheses[s[i]]){
            pairedArray.unshift(parentheses[s[i]]);
        } else if(s[i] !== pairedArray[0]){
            return false;
        } else {
            pairedArray.shift();
        }
    }

    return pairedArray[0]? false : true;
};

//Isomorphic Strings 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var map_s = {}, map_t = {};
    for(i=0; i<s.length; i++){
        if(!map_s[s[i]] && !map_t[t[i]]){
            map_s[s[i]] = t[i];
            map_t[t[i]] = s[i];
        } else if(map_s[s[i]] !== t[i] || map_t[t[i]] !== s[i]) {
            return false;
        }
    }
    return true;
};

//word pattern
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var map_pattern = {}, map_str = {};
    var str_array = str.split(" ");
    if(pattern.length !== str_array.length){
        return false;
    }
    for(i=0; i<pattern.length; i++){
        if(!map_pattern[str_array[i]] && !map_str[pattern[i]]){
            map_pattern[str_array[i]] = pattern[i];
            map_str[pattern[i]] = str_array[i];
        } else if(map_pattern[str_array[i]] !== pattern[i] || map_str[pattern[i]] !== str_array[i]){
            return false;
        }
    }
    return true;
};

//Count and say
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function countOnce(num){
        var newNum = "";
        var tempLocation = 0;
        var tempCount = 1;
        for(i=0; i<num.length; i++){
            if(!num[i+1] || num[i] !== num[i+1]){
                newNum += tempCount;
                newNum += num[tempLocation];
                tempCount = 1;
                tempLocation = i+1;
            } else {
                tempCount ++;
            }
        }
        return newNum;
    }
    var initial = "1";
    for(j=1; j<n; j++){
        initial = countOnce(initial);
    }
    return initial;
};

//Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
 //No sort
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }
    if(strs.length === 1){
        return strs[0];
    }
    var prefix = "";
    for(i=0; ;i++){
        if(!strs[0] || !strs[0][i]){
            return prefix;
        }
        tempLetter = strs[0][i];
        for(j=1; j<strs.length; j++){
            if(strs[j][i] !== tempLetter){
                return prefix;
            }
        }
        prefix += tempLetter;
    }
    return prefix;
};

//with sort
var longestCommonPrefix = function(strs) {
    strs.sort();
    if(strs.length === 0){
        return "";
    }
    if(strs.length === 1){
        return strs[0];
    }
    var prefix = "";
    for(i=0; i<strs[0].length; i++){
        if(strs[strs.length-1][i] !== strs[0][i]){
            return prefix;
        }
        prefix += strs[0][i];
    }
    return prefix;
};

//add binary
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}; // have 32-digit limit


var addBinary = function(a, b) {
    var result = "";
    var temp = 0;
    var length = Math.max(a.length, b.length);
    a = a.split("").reverse();
    b = b.split("").reverse();
    for(i=0; i<length; i++){
        var x = a[i] ? parseInt(a[i]) : 0;
        var y = b[i] ? parseInt(b[i]) : 0;
        result += (x+y+temp) %2;
        temp = Math.floor((x+y+temp)/2);
    }
    if(temp){
        result += temp;
    }
    return result.split("").reverse().join("");
};

//Bulls and cows
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var map = {};
    var A = 0, B = 0;

    for(i=0; i<secret.length; i++){
        if(!map[secret[i]]){
            map[secret[i]] = 1;
        } else {
            map[secret[i]] ++;
        }
    }
    for(j=0; j<guess.length; j++){
        //Calculate Bulls
        if(secret[j] === guess[j]){
            A++;
        }
        //Calculate Cows
        if(map[guess[j]] > 0){
            B++;
            map[guess[j]]--;
        }
    }
    B = B-A;

    return "" + A + 'A' + B + 'B';
};

//Range Sum Query - Immutable
/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.cumulative = {};
    var total = 0;
    for(i=0; i<this.nums.length; i++){
        total += nums[i];
        this.cumulative[i] = total;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i===0 ? this.cumulative[j] : this.cumulative[j] - this.cumulative[i-1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

 //Valid Palindrome
 /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s===""){
        return true;
    }
    s = s.replace(/[^A-Za-z0-9]+/g, "").toLowerCase();
    return s === s.split("").reverse().join("");
};

//Zigzag conversion
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1){
        return s;
    }
    var n = 2*numRows - 2; //count of numbers in one zig
    var array = [];
    for(i=0; i<s.length; i++){
        row = (i%n < numRows) ? i%n : (n-i%n);
        if(!array[row]){
            array[row] = "";
        }
        array[row]+= s[i];
    }
    return array.join("");
};

//204. Count primes
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var primeArray = [];
    for(i=2; i<n; i++){
        primeArray[i] = true;
    }
    for(j=2; j*j<n; j++){
        if(!primeArray[j]){
            continue;
        }
        for(k=j*j; k<n; k+=j){
            primeArray[k] = false;
        }
    }
    var count = 0;
    for(l = 2; l<n; l++){
        if(primeArray[l]){
            count ++;
        }
    }
    return count;
};

//1.17.2016 - Exceed time limit
/**
 * @param {number} n
 * @return {number}
 */
// var countPrimes = function(n) {
//     if(n<2){
//         return 0;
//     }
//     var primes = [2];
//     var count = 1;
//     for(i=3; i<n; i++){
//         var j = 0;
//         while(j < count && i%primes[j] !== 0){
//             j++;
//         }
//         if(j === count){
//             primes.push(i);
//             count ++;
//         }
//     }
//     return count;
// };





//Summary Ranges
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var result = [];
    var temp = "";
    var range = false;
    for(i=0; i<nums.length; i++){
        if(!range){
            temp += nums[i];
        }
        if(!range && nums[i+1]-nums[i] === 1){
            temp += "->";
            range = true;
        }
        if (!nums[i+1] || nums[i+1] - nums[i] > 1){
            if(range){temp += nums[i];}
            result.push(temp);
            range = false;
            temp = "";
        } 
    }
    return result;
};

//First bad version
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1, right = n;
        var mid;
        while(left < right){
            mid = Math.floor(left + (right-left)/2);
            if(isBadVersion(left)){
                return left;
            }
            if(isBadVersion(mid)){
                right = mid;
            } else if(isBadVersion(mid+1)){
                return mid+1;
            } else {
                left = mid+2;
            }
        }
        return left;
    };
};

//Excel sheet column title
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var array = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var result = "";
    while (n>0){
        result = array[(n-1)%26] + result;
        n = Math.floor((n-1)/26);
    }
    return result;
};

//Rotate array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k>=nums.length){
        k=k%nums.length;
    }
    var temp = nums.splice(nums.length-k, k);
    for(i=k-1; i>=0; i--){
        nums.unshift(temp[i]);
    }
}

//Compare version numbers
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    var v1 = version1.split(".");
    var v2 = version2.split(".");
    var length = Math.max(v1.length, v2.length);
    for(i=0; i<=length; i++){
        a = parseInt(v1[i]); b=parseInt(v2[i]);
        if(b && !a || b > a){
            return -1;
        } if (a && !b || a > b){
            return 1;
        }
    }
    return 0;
};

//Product Except Self
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var productBefore = 1;
    var productAfter = 1;
    var length = nums.length;
    var result = new Array(length).fill(1);
    for(i=1; i<nums.length; i++){
        productBefore *= nums[i-1];
        productAfter *= nums[length-i];
        result[i] *= productBefore;
        result[length-i-1] *= productAfter;
    }
    return result;
};

//missing number
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var n = nums.length;
    var actual = n;
    for(i=0; i<n; i++){
        actual += (i - nums[i]);
    }
    return actual;
};

//search insert position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target <= nums[0]){
        return 0;
    }
    for(i=1; i<nums.length; i++){
        if(target > nums[i-1] && target <= nums[i]){
            return i;
        }
    }
    return nums.length;
};

//8. String to Interger (atoi)
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    //remove the whitespaces from both ends
    str = str.trim();
    var result = 0;
    var sign = 1;
    if(str[0] === '-'){
        sign = -1;
        str = str.substr(1);
    } else if (str[0] === '+'){
        str = str.substr(1);
    }

    for(i=0; i<str.length; i++){
        if(!str[i].match(/([0-9])/g)){
            break;
        }
        result = result * 10 + str[i] * 1;
        if(result > 2147483647){
            result = (sign === 1) ? 2147483647 : 2147483648;
            break;
        }     
    }

    return result * sign;

};



//28. Implement strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var index = -1;
    var j = 0;
    if(needle.length === 0){
        return 0;
    }
    if(haystack.length < needle.length){
        return -1;
    }
    for(i=0; i<haystack.length; i++){
        if(haystack.length - i < needle.length - j){
            return -1;
        }
        if(haystack[i] === needle[j]){
            if(j === 0){
                index = i;
            } 
            if(j === needle.length-1){
                return index;
            }
            if(haystack.length - i < needle.length - j){
                return -1;
            }
            j++;
        } else {
            i -= j;
            j = 0;
            index = -1;
        }
    }
    return -1;    
};



//another brutal algo
var strStr = function(haystack, needle) {
    for(i=0;;i++){
        for (j=0;;j++){
            if(j === needle.length){
                return i;
            }
            if(i + j === haystack.length){
                return -1;
            }
            if(needle[j] !== haystack[i+j]){
                break;
            }
        }
    }
};


//12. Interger to Roman
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var number = [1000, 500, 100, 50, 10, 5, 1];
    var letter = ["M", "D", "C", "L", "X", "V", "I"];
    var letterMap = {};
    var result = "";
    for(j=0; j<number.length; j++){
        if((number[j+1] === 100 || number[j+1] === 10 || number[j+1] ===1) && num >= 9*number[j+1] && num < 10*number[j+1]){
            j++;
            letterMap[letter[j]] = Math.floor(num/number[j]);
            num = num % number[j];
        } else if(num >= number[j]){
            letterMap[letter[j]] = Math.floor(num/number[j]);
            num = num % number[j];
        }
    }
    for(i=0; i<letter.length; i++){
        count = letterMap[letter[i]];
        if(count > 0 && count < 4){
            result += letter[i].repeat(count);
        } else if (count === 4){
            temp = letter[i-1];
            result += letter[i];
            result += temp;
        } else if (count === 9){
            temp = letter[i-2];
            result += letter[i];
            result += temp;
        }
    }
    return result;
};



//319. Bulb Switcher
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    if(n<2){
        return n;
    }
    var bulbs = [];
    var result = 0;
    for(var i=0; i<n; i++){
        bulbs[i] = 0;
    }
    for(var j=0; j<n; j++){
        for(var k=j; k<n; k+=(j+1)){
            bulbs[k] = (bulbs[k] + 1) % 2;
        }
    }
    result = bulbs.reduce(function(a,b){return a+b;}) || 0;
    return result;
}; // time limit exceeded when n is large

var bulbSwitch = function(n) {
    return parseInt(Math.pow(n, 0.5));
}; 

//318. Maximum Product of Word lengths

//137. Single Number II


//53. Maximum Subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var currentSum = 0;
    var length = nums.length;

    for(i=1; i<length; i++){
        currentSum += nums[i];
        if(currentSum > maxSum){
            maxSum = currentSum;
        }
        if(currentSum < 0){
            currentSum = 0;
        } 
    }
    return maxSum;
}; 

//62. Unique Paths
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    var result = 1;
    var limit = Math.min(m, n);
    for(var i=1; i<limit; i++){
        result *= (m + n - i - 1);
        result /= i;
    }
    return result;
};//Combinations of (n-1) from (m-1 + n-1); works well

//need to try DP below
var uniquePaths = function(m, n) {
    var paths = [];
    paths[1] = new Array(101);
    paths[1].fill(1);
    
    for(i=2; i<=m; i++){
        if(!paths[i]){
            paths[i] = [];
            paths[i][0] = 0;
            paths[i][1] = 1;
        }
        for(j=2; j<=n; j++){
            paths[i][j] = (paths[i][j-1]) + (paths[i-1][j]);
        }
    }
    return paths[m][n];
};

//63. Unique Paths II
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var n = obstacleGrid.length;
    var m = obstacleGrid[0].length;
    var paths = [];
    paths[0] = new Array(101);
    paths[0][0] = obstacleGrid[0][0] ? 0 : 1;
        
    for(i=0; i<m; i++){
        if(!paths[i]){
            paths[i] = new Array(101);
        }
        for(j=0; j<n; j++){
            if(obstacleGrid[i][j] === 1){
                paths[i][j] = 0;
            } else if(!paths[i][j]) {
                if(i === 0){
                    paths[i][j] = paths[i][j-1];
                } else if (j === 0){
                    paths[i][j] = paths[i-1][j];
                } else {
                    paths[i][j] = paths[i-1][j] + paths[i][j-1];
                }
            }
        }
    }
    return paths[m-1][n-1];
};

//64. Minimum Path Sum
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var n = grid.length;
    var m = grid[0].length;
    var pathSum = [];
    pathSum[0] = new Array(m);
    pathSum[0][0] = grid[0][0];
        
    for(i=0; i<n; i++){
        if(!pathSum[i]){
            pathSum[i] = new Array(m);
        }
        for(j=0; j<m; j++){
            if(!pathSum[i][j]) {
                if(i === 0){
                    if(j !==0){
                        pathSum[i][j] = pathSum[i][j-1] + grid[i][j];
                    }
                } else if (j === 0){
                    if(i !==0){
                        pathSum[i][j] = pathSum[i-1][j] + grid[i][j];
                    }
                } else {
                    pathSum[i][j] = grid[i][j] + Math.min(pathSum[i-1][j], pathSum[i][j-1]);
                }
            }
        }
    }
    return pathSum[n-1][m-1];
};

//121. Best time to buy and sell stock
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    var buy = prices[0];
    var sell = prices[1];
    var maxProfit = (sell - buy > 0) ? sell - buy : 0;
    var temp_buy;
    var length = prices.length;

    for(i=1; i<length; i++){
        if(prices[i] < temp_buy && prices[i] - temp_buy > maxProfit){
            buy = temp_buy;
            sell = prices[i];
            maxProfit = sell - buy;
        } else if(prices[i] < temp_buy || (typeof(temp_buy) === "undefined" && prices[i] < buy)){
            temp_buy = prices[i];
        } else if(prices[i] > sell){
            sell = prices[i];
            maxProfit = sell - buy;
        }
    }
    return maxProfit;
}; 

//122. Best time to buy and sell stock II
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2){
        return 0;
    }
    var buy = prices[0];
    var maxProfit = 0;
    var length = prices.length;
    for(i=1; i<=length; i++){
        if(i === length || prices[i] < prices[i-1]){
            if(prices[i-1] > buy){
                maxProfit += (prices[i-1] - buy);
            }
            buy = prices[i];
        }
    }
    return maxProfit;
};

//309. Best time to buy and sell stock with cooldown
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
};

//264. Ugly number II
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    var uglyNumbers = [1];
    var temp;
    for(i=1; i < n; i++){
        
    }
};

//300. Longest Increasing Subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    
};