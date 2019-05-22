/*
arr.lastIndexOf(searchElement[, fromIndex])

lastIndexOf() is the same general idea as indexOf(), only it searches from back to front.
Returns -1 if the search element is not found.
Returns the index at the first location of the search element (searching backwards).
Like indexOf, makes its comparisons using strict equality (===).

Starting index defaults to array.length - 1.

Optional fromIndex can be given to set the starting index.
	If fromIndex >= array.length, start at index array.length - 1.
	If fromIndex is not an integer, start at index array.length - 1.
	If fromIndex is negative, it is taken as an offset from the end of the array.
		If the calculated starting index is < 0, returns -1 without searching the array.
*/

tests({
	'lastIndexOf should return -1 if searchElement is not found': function() {
		fail();
	},
	'lastIndexOf should search backwards and return index of first match for searchElement': function() {
		fail();
	},
	'lastIndexOf should start search at array.length - 1 if fromIndex is not given': function() {
		fail();
	},
	'lastIndexOf should start search at array.length - 1 if fromIndex is not an integer': function() {
		fail();
	},
	'lastIndexOf should start search at array.length - l if fromIndex is >= array.length': function() {
		fail();
	},
	'If fromIndex < 0 and |fromIndex| > array.length, lastIndexOf should return -1 without searching': function() {
		fail();
	},
	'If fromIndex < 0 and |fromIndex| < array.length, starting index should be array.length + fromIndex': function() {
		fail();
	},
	'': function() {
		fail();
	}
});
