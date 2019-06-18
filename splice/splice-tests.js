// tests for splice(), based on array.prototype.splice()
// covers standard behavior
// covers behavior with parameters of the wrong type
// does not cover objects resembling arrays, at least initially
//
// eq is an alias for assertStrictEquals in the version of simpletest used here.

tests({
	'splice should accept an array as its first argument and return a new array.': function() {
		var arr = [1, 2, 3];
		result = splice(arr);
		eq(result === arr, false);
		eq(Array.isArray(result), true);
	},
	'If only array and start are given, splice should remove elements from start to end of array.': function() {
		var arr = [1, 2, 3];
		var startPosition = 1;
		result = splice(arr, startPosition);
		eq(arr.length, 1);
		eq(arr[0], 1);
		eq(arr[1] in arr, false);
		eq(arr[2] in arr, false);
	},
	'splice should put deleted elements, if any, in the array to be returned.': function() {
		var arr = [1, 2, 3];
		result = splice(arr, 1);
		eq(result.length, 2);
		eq(result[0], 2);
		eq(result[1], 3);

		var arr = [];
		result = splice(arr, 1);
		eq(result.length, 0)
		eq(arr.length, 0);
	},
	'If start > array.length, splice should set start to array.length.': function() {
		var arr = [1, 2, 3];
		result = splice(arr, 5);
		eq(arr.length, 3);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
	},
	'If start < 0, splice should set start to array.length + start.': function() {
		var arr = [1, 2, 3];
		result = splice(arr, -2);
		eq(arr.length, 1);
		eq(arr[0], 1);
		eq(arr[1] in arr, false);
		eq(arr[2] in arr, false);
	},
	'If start < 0 and array.length + start < 0, splice should set start to 0.': function() {
		var arr = [1, 2, 3];
		result = splice(arr, -5);
		eq(arr.length, 0);
		eq(arr[0] in arr, false);
		eq(arr[1] in arr, false);
		eq(arr[2] in arr, false);
	},
	'If start is non-numeric, splice should convert it to an integer if possible.': function() {
		var arr = [1, 2, 3];
		result = splice(arr, '1.2');
		eq(result.length, 2);
		eq(result[0], 2);
		eq(result[1], 3);
		eq(arr.length, 1);
		eq(arr[0], 1);
	},
	'If start is undefined or evaluates to NaN, splice should set it to 0.': function() {
		var arr = [1, 2];
		result = splice(arr, 'xyz');
		eq(result.length, 2);
		eq(result[0], 1);
		eq(result[1], 2);
		eq(arr.length, 0);

		var arr = [1, 2];
		result = splice(arr, undefined);
		eq(result.length, 2);
		eq(result[0], 1);
		eq(result[1], 2);
		eq(arr.length, 0);
	},
	'If splice is given deleteCount, it should remove that number of elements.': function() {
		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 1, 3);		// deleteCount > start
		eq(arr[0], 1);
		eq(arr[1], 5);
		eq(arr.length, 2);
		eq(result[0], 2);
		eq(result[1], 3);
		eq(result[2], 4);
		eq(result.length, 3);

		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 3, 1);		// start > deleteCount
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
		eq(arr[3], 5);
		eq(arr.length, 4);
		eq(result[0], 4);
		eq(result.length, 1);

		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 0, 5);		// delete all
		eq(result.length, 5);
		eq(result[0], 1);
		eq(result[1], 2);
		eq(result[2], 3);
		eq(result[3], 4);
		eq(result[4], 5);
		eq(arr.length, 0);

		var arr = [1, 2, 3];
		result = splice(arr, 0, 0);		// delete none
		eq(result.length, 0);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
		eq(arr.length, 3);

		var arr = [];
		result = splice(arr, 1, 1);		// delete not possible
		eq(result.length, 0)
		eq(arr.length, 0);
	},
	'If deleteCount >= (array.length - start), splice should remove elements to end of array.': function() {
		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 1, 7);
		eq(arr[0], 1);
		eq(arr.length, 1);
		eq(result[0], 2);
		eq(result[1], 3);
		eq(result[2], 4);
		eq(result[3], 5);
		eq(result.length, 4);
	},
	'If deleteCount <= 0, splice should not remove any elements.': function() {
		var arr = [1, 2];
		result = splice(arr, 1, 0);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr.length, 2);
		eq(result.length, 0);

		var arr = [1, 2];
		result = splice(arr, 1, -1);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr.length, 2);
		eq(result.length, 0);
	},
	'If deleteCount is non-numeric, splice should convert it to an integer if possible.': function() {
		var arr = [1, 2, 3];
		result = splice(arr, 0, '1.2');
		eq(result.length, 1);
		eq(result[0], 1);
		eq(arr.length, 2);
		eq(arr[0], 2);
		eq(arr[1], 3);
	},
	'If deleteCount is undefined or evaluates to NaN, splice should set it to 0.': function() {
		var arr = [1, 2];
		result = splice(arr, 0, 'xyz');
		eq(result.length, 0);
		eq(arr.length, 2);
		eq(arr[0], 1);
		eq(arr[1], 2);

		var arr = [1, 2];
		result = splice(arr, 0, undefined);
		eq(result.length, 0);
		eq(arr.length, 2);
		eq(arr[0], 1);
		eq(arr[1], 2);
	},
	'If additional arguments are supplied, splice should add them as elements beginning from start.': function() {
		var arr = [1, 3];
		result = splice(arr, 1, 0, 2);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
		eq(result.length, 0);
		eq(arr.length, 3);

		var arr = ['a', 'b', 'f', 'f', 'g'];
		result = splice(arr, 2, 1, 'c', 'd', 'e');
		eq(result.length, 1);
		eq(result[0], 'f');
		eq(arr.length, 7);
		eq(arr[0], 'a');
		eq(arr[1], 'b');
		eq(arr[2], 'c');
		eq(arr[3], 'd');
		eq(arr[4], 'e');
		eq(arr[5], 'f');
		eq(arr[6], 'g');

		var arr = [1, 2, 3, 4, 5];
		result = splice(arr, 0, 5, 'a', 'b', 'c', 'd');
		eq(result.length, 5);
		eq(result[0], 1);
		eq(result[1], 2);
		eq(result[2], 3);
		eq(result[3], 4);
		eq(result[4], 5);
		eq(arr.length, 4);
		eq(arr[0], 'a');
		eq(arr[1], 'b');
		eq(arr[2], 'c');
		eq(arr[3], 'd');
	}
});
