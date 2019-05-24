/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

arr.slice([begin[, end]])

Returns a new array containing the extracted elements.
begin and end are optional arguments that have meaning if they are integers
	If begin < array.length, starting index is begin.
	If begin > array.length, returns a new emtpy array.
	If begin is negative, starting index is array.length + begin.
		It doesn't matter if |begin| > array.length, starting index is effectively 0


	If begin is not supplied or undefined or otherwise not an integer, slice starts at 0

	If end < array.length, the index of last element extracted is end - 1.
	If end > array.length, extracts through index array.length - 1.
	If end is negative, ending index is array.length + end.
		If |end| > array.length, returns an empty array.

	If end is not supplied or undefined or otherwise not an integer, extracts through
	array.length -1.

slice() makes a shallow copy, so use newArray.push() to add elements to result array
and use === in tests to compare corresponding elements in the result and original arrays.
	=== produces the correct answer (false) for NaN equal to NaN
	=== produces the correct answer (true) for -0 and +0

slice works on "array-like" objects, i.e. objects that are iterable.

 */

tests({
	'With no arguments, slice should return a copy of array': function() {
		var target = [];
		result = slice(target);
		eqstrict(target[0], result[0]);
//		var obj = {};
//		var target2 = [1, obj]
//		result2 = slice(target2);
//		eq(target2, result2);
//		obj = {changed: true};
//		eq(target2, result2);
	},
	'If begin is not an integer, slice should start at index 0': function() {
		fail();
		result = slice([1, 2], 'z')
		eq(result, [1, 2]);
	},
	'If begin is an integer < array.length, slice should start at begin': function() {
		fail();
	},
	'If begin is an integer > array.length, slice should return an empty array': function() {
		fail();
	},
	'If begin is a negative integer, starting index should be array.length + begin': function() {
		fail();
	},
	'If end is not an integer, final index should be array.length - 1': function() {
		fail();
	},
	'If end is an integer < array.length, final index should be end - 1': function() {
		fail();
	},
	'If end is an integer > array.length, final index should be array.length - 1': function() {
		fail();
	},
	'If end is a negative integer, final index should be array.length + end': function() {
		fail();
	}
//	'': function() {
//		fail();
//	}
});

