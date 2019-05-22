/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

arr.indexOf(searchElement[, fromIndex])

Return the first index at which a given element can be found in the array.
If the element is not in the array, return -1.
Either way, returns a number
Works left to right
Compares the search element to each array element using strict equality (===)
   which means that the types must match and the contents must match
By default, the comparison starts at index 0.
The starting index can be specified with an optional fromIndex parameter.
   If fromIndex >= array.length, return -1 and do not search the array.
   If fromIndex is a negative number, use it as an offset to array.length.
      If the offset is > array.length, start at 0.
*/

tests({
	'indexOf should return -1 if searchElement is not in the array': function() {
		fail();
		result = indexOf(['a'], 'b');
		eq(result, -1);
	},
	'indexOf should start search at array[0] if fromIndex is not provided': function() {
		fail();
		result = indexOf(['a', 'a'], 'a');
		eq(result, 0);
	},
	'indexOf should return index of first element matching searchElement': function() {
		fail();
		result = indexOf(['a', 'b', 'b'], 'b');
		eq(result, 1);
	},
	'indexOf should start search at array[fromIndex] if it is provided': function() {
		fail();
	},
	'If fromIndex is >= array.length, indexOf should return -1 without searching array': function() {
		fail();
	},
	'If fromIndex < 0 and |fromIndex| > array.length, starting index should be 0': function() {
		fail();
	},
	'If fromIndex < 0 and |fromIndex| < array.length, starting index should be array.length - |fromIndex|': function() {
		fail();
	}
});
