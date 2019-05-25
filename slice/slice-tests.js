/*
The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

arr.slice([begin[, end]])

Returns a new array containing the extracted elements.
begin and end are optional arguments that have meaning if they are integers
	If begin is >= 0
		If begin < array.length, starting index is begin.
		If begin > array.length, returns a new emtpy array.
	If begin is negative
		If |begin| <= array.length, starting index is array.length + begin.
		If |begin| > array.length, set starting index to 0


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

slice works on "array-like" objects, i.e. objects with a length property and iterable (indexed) elements. 

 */

tests({
	'With no arguments, slice should return a copy of array': function() {
		var target = [];
		result = slice(target);
		eqstrict(target[0], result[0]);
		eq(target.length, result.length);
		var obj = {};
		var target2 = [1, obj]
		result2 = slice(target2);
		eqstrict(target2[0], result2[0]);
		eqstrict(target2[1], result2[1]);
		obj = {changed: true};
		eqstrict(target2[1], result2[1]);
		eq(target2.length, result2.length);
	},
	'If begin is a positive integer < array.length, slice should start at begin': function() {
		target = [1, 2, 3];
		result = slice(target, 1);
		eqstrict(result[0], target[1]);
	},
	'If begin is a positive integer > array.length, slice should return an empty array': function() {
		// passes with no code change because for loop does not run
		target = [1, 2, 3];
		result = slice(target, 4);
		eq(result.length, 0);
		Array.isArray(result);
	},
	'If begin is negative and |begin| < array.length, slice should start at array.length + begin': function() {
		target = [1, 2, 3];
		result = slice(target, -1);
		eqstrict(target[2], result[0]);
		result2 = slice(target, -2);
		eqstrict(target[1], result2[0]);
		eqstrict(target[2], result2[1]);
	},
	'if begin is negative and |begin| > array.length, slice should start at index 0': function() {
		result3 = slice(target, -5);
		eqstrict(target[0], result3[0]);
		eqstrict(target[1], result3[1]);
		eqstrict(target[2], result3[2]);
	},
	'If begin is not an integer, slice should start at index 0': function() {
		target = [1, 2];
		result = slice(target, 'z')
		eqstrict(result[0], target[0]);
	},
	'If end is a positive integer < array.length, ending index should be end - 1': function() {
		target = [1, 2, 3, 4];
		result = slice(target, 1, 2);
		eqstrict(result[0], target[1]);
	},
	'If end is a positive integer > array.length, ending index should be array.length - 1': function() {
		target = [1, 2, 3, 4];
		result = slice(target, 2, 8);
		eqstrict(target[2], result[0]);
		eqstrict(target[3], result[1]);
	},
	'If end is a negative integer, ending index should be (array.length - 1) + end': function() {
		target = [1, 2, 3, 4];
		result = slice(target, 2, -1);
		eqstrict(target[2], result[0]);
		eq(result.length, 1);
		result2 = slice(target, 0, -5);
		eqstrict(result2.length, 0);
		eqstrict(result2[0], undefined);
	},
	'If end is not an integer, ending index should be array.length - 1': function() {
		target = [1, 2, 3, 4];
		result = slice(target, 2, 'z');
		eqstrict(target[2], result[0]);
		eqstrict(target[3], result[1]);
		eq(result.length, 2);
	},
	'slice should work on array-like objects': function() {
		// passes with no code change
		function list() {
			return slice(arguments);
		}
		testList = list(1, 2);
		eqstrict(testList[0], 1);
		eqstrict(testList[1], 2);
		eq(testList.length, 2);
	}
});

