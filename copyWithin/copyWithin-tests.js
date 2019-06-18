/*
copyWithin() copies a slice of array to a specified location in the same array.

arr.copyWithin(target[, start[, end]])

Returns the mutated array.
Does not change array.length.
Starts the slice at index 'start' (0 if omitted, undefined or NaN).
Ends the slice before index 'end' (array.length - 1 if omitted or undefined).
Copies the slice to array starting at target (no default, target is required).

Behavior of end is different for undefined and NaN.
	As noted above, set end to last index if end is undefined or omitted.
	However, if end is NaN, abort and do not copy.

obj = {
	0: 1,
	1: 2,
	2: 3,
	3: 4,
	length: 4
}
{0: 1, 1: 2, 2: 3, 3: 4, length: 4}
[].slice.call(obj, 2, undefined)
(2) [3, 4]
[].slice.call(obj, 2, NaN)
[]

If target is >= array.length, no copy is made.
If target > start, the slice is trimmed to fit array length.
If start is negative, start = array.length + start.
If end is negative, end = array.length + end.

Works on objects resembling arrays.
*/

tests({
	'copyWithin should take an array and return it.': function() {
		arr = [1, 2, 3];
		result = copyWithin(arr);
		eq(result, arr);
	},
	'copyWithin should not change array.length.': function() {
		arr = [1, 2, 3];
		var originalLength = arr.length;
		result = copyWithin(arr);
		eq(result.length, originalLength);
	},
	'copyWithin should replace array elements with slice elements starting at target.': function() {
		arr = [1, 2, 3];
		result = copyWithin(arr, 0);
		eq(result, arr);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
	},
	'copyWithin should not replace array elements if target >= array.length.': function() {
		arr = [1, 2, 3];
		result = copyWithin(arr, 5);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
	},
	'copyWithin should trim slice to fit array.length - target if necessary.': function() {
		arr = [1, 2, 3];
		result = copyWithin(arr, 1);
		eq(result, arr);
		eq(arr[0], 1);
		eq(arr[1], 1);
		eq(arr[2], 2);
	},
	'If target is positive, copyWithin should start replacing at that index.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, 2);
		eq(result, arr);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 1);
		eq(arr[3], 2);
	},
	'If target is negative, copyWithin should start replacing at array.length + target.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, -2);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 1);
		eq(arr[3], 2);
	},
		'If array.length + target < 0, copyWithin should not copy.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, -8);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
		eq(arr[3], 4);
	},
	'If start evaluates to NaN, copyWithin should slice from index 0.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, -2, 'abc');
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 1);
		eq(arr[3], 2);
		
	},
	'If start is positive, copyWithin should slice from that index.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, 2, 1);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 2);
		eq(arr[3], 3);
	},
	'If start is negative, copyWithin should slice from array.length + start.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, 2, -3);
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 2);
		eq(arr[3], 3);
	},
	'If end evaluates to NaN, copyWithin should abort and not copy.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, 1, 2, 'abc');
		eq(arr[0], 1);
		eq(arr[1], 2);
		eq(arr[2], 3);
		eq(arr[3], 4);
	},
	'If end is undefined, copyWithin should stop slice at array.length - 1.': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, 1, 0, undefined);
		eq(arr[0], 1);
		eq(arr[1], 1);
		eq(arr[2], 2);
		eq(arr[3], 3);
	},
	'If end is positive, copyWithin should stop slice at index end - 1.': function() {
		arr = [1, 2, 3, 4, 5];
		result = copyWithin(arr, 0, 3, 4);
		// [4, 2, 3, 4, 5]
		eq(arr[0], 4);
		eq(arr[1], 2);
		eq(arr[2], 3);
		eq(arr[3], 4);
		eq(arr[4], 5);
	},
	'If end is negative, copyWithin should stop slice at index array.length + end.': function() {
		arr = [1, 2, 3, 4, 5];
		result = copyWithin(arr, 0, 3, -1);
		// [4, 2, 3, 4, 5]
		eq(arr[0], 4);
		eq(arr[1], 2);
		eq(arr[2], 3);
		eq(arr[3], 4);
		eq(arr[4], 5);
	}
});
