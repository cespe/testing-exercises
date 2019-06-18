/*
arr.lastIndexOf(searchElement[, fromIndex])

lastIndexOf() is the same general idea as indexOf(), only it searches from back to front.
Returns -1 if the search element is not found.
Returns the index at the first location of the search element (searching backwards).
Like indexOf, makes its comparisons using strict equality (===).

Starting index defaults to array.length - 1.

Optional fromIndex can be given to set the starting index.
	If fromIndex >= array.length, start at index array.length - 1.
	If fromIndex is not an integer, return -1 without searching the array (different than indexOf)
	If fromIndex is negative, it is taken as an offset from the end of the array.
		If the calculated starting index is < 0, returns -1 without searching the array.
*/

tests({
	'lastIndexOf should search array backwards and return index of first match for searchElement.': function() {
		var result = lastIndexOf([1, 1], 1);
		eq(result, 1);
	},
	'lastIndexOf should start search at array.length - 1 if fromIndex is not given.': function() {
		var result = lastIndexOf([3, 3, 3], 3);
		eq(result, 2); // passes without code change
	},
	'lastIndexOf should return -1 if searchElement is not found.': function() {
		var result = lastIndexOf([1], 2);
		eq(result, -1);
	},
	'If fromIndex < 0 and |fromIndex| > array.length, lastIndexOf should return -1 without searching.': function() {
		var result = lastIndexOf([1], 1, -2);
		eq(result, -1);
	},
	'lastIndexOf should return -1 without searching if fromIndex is not an integer.': function() {
		var result = lastIndexOf(['a', 'b'], 'z');
		eq(result, -1); 
	},
	'lastIndexOf should start search at array.length - l if fromIndex is >= array.length.': function() {
		var result = lastIndexOf([3, 3, 3], 3, 5);
		eq(result, 2); // passes without code change
	},
	'If fromIndex < 0 and |fromIndex| < array.length, starting index should be array.length + fromIndex.': function() {
		var result = lastIndexOf([1, 1, 1, 1], 1, -1)
		eq(result, 2);
	},
	'If fromIndex >= 0 and < array.length, starting index should be fromIndex.': function() {
		var result = lastIndexOf([1, 1, 1, 1], 1, 1);
		eq(result, 1);
	},
	'If fromIndex is not an integer but can be converted to one, it should be treated as an integer.': function() {
		var result = lastIndexOf([1, 1, 1, 1], 1, 1.8);
		eq(result, 1);
		var result = lastIndexOf([1, 1, 1, 1], 1, '1.8');
		eq(result, 1);
		var result = lastIndexOf([1, 1, 1, 1], 1, '1');
		eq(result, 1);
	}
});
