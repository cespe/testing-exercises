/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

arr.indexOf(searchElement[, fromIndex])

Return the first index at which a given element can be found in the array.
If the element is not in the array, return -1.
Compares the search element to each array element using strict equality (===)
   which means that the types must match and the contents must match
By default, the comparison starts at index 0.
The starting index can be specified with an optional fromIndex parameter.
	If fromIndex is not an integer, start at array[0]   
	If fromIndex >= array.length, return -1 and do not search the array.
	If fromIndex is a negative number, use it as an offset to array.length.
*/

tests({
	'indexOf should return -1 if searchElement is not found': function() {
		var result = indexOf(['a'], 'b');
		eq(result, -1);
	},
	'indexOf should start search at array[0] if fromIndex is not provided': function() {
		var result = indexOf(['a', 'a'], 'a');
		eq(result, 0);
	},
	'indexOf should start search at array[0] if fromIndex is not an integer': function() {
		var result = indexOf(['a', 'a'], 'a', 'z');
		eq(result, 0);
	},
	'indexOf should return index of first element matching searchElement': function() {
		var result = indexOf([1, 2, 2], 2);
		eq(result, 1);
	},
	'indexOf should start search at array[fromIndex] if it is provided': function() {
		var result = indexOf([1, 1, 1], 1, 1);
		eq(result, 1);	
	},
	'If fromIndex is >= array.length, indexOf should return -1 without searching array': function() {
		var result = indexOf([1], 1, 1);
		eq(result, -1);
	},
	'If fromIndex < 0, starting index should be array.length + fromIndex': function() {
		var result = indexOf([2, 2], 2, -5); 
		eq(result, 0);
		var result2 = indexOf([1, 2, 3, 4, 5], 3, -2); 
		eq(result2, -1);
		var result3 = indexOf([1, 2, 3, 4, 5], 3, -3);
		eq(result3, 2);
		var result4 = indexOf([2, 2], undefined, -5);
		eq(result4, -3);
	}
});
