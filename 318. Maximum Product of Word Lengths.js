318. Maximum Product of Word Lengths
/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
	function letterMap(strA){
		var map = {};
		for (var i = 0; i < strA.length; i++){
			if(!map[strA.charAt(i)]){
				map[strA.charAt(i)] = true;
			}
		}
		return map;
	}

	function shareLetter(mapA, mapB){
		for(var item in mapA){
			if(mapB[item]){
				return true;
			}
		}
		return false;
	}

	var length = words.length;
	var maxProduct = 0;
	var mapArray = [];

	if(length <= 1){
		return maxProduct;
	}

	for(var i = 0; i < words.length; i ++){
		mapArray[i] = letterMap(words[i]);
		for(var j = i + 1; j < words.length; j ++){
			if(!mapArray[j]){
				mapArray[j] = letterMap(words[j]);
			}
			if(!shareLetter(mapArray[i], mapArray[j])){
				product = words[i].length * words[j].length;
				maxProduct = Math.max(product, maxProduct);
			}

		}
	}

	return maxProduct;

};