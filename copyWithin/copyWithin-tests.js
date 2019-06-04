/*
copyWithin() copies a slice of array to a specified location in the same array.

arr.copyWithin(target[, start[, end]])

Returns the mutated array.
Does not change array.length.
Starts the slice at index 'start' (0 if omitted).
Ends the slice before index 'end' (array.length - 1 if omitted).
Copies the slice to array starting at target (no default, target is required).

If target is >= array.length, no copy is made.
If target > start, the slice is trimmed to fit array length.
If start is negative, start = array.length + start.
If end is negative, end = array.length + end.

Works on objects resembling arrays.
*/

tests({
	'copyWithin should take an array and return it': function() {
		arr = [1, 2, 3];
		result = copyWithin(arr);
		eqstrict(result, arr);
	},
	'copyWithin should not change array.length': function() {
		// no code change needed to pass
		arr = [1, 2, 3];
		var originalLength = arr.length;
		result = copyWithin(arr);
		eqstrict(result.length, originalLength);
	},
	'copyWithin should take target and copy entire array to it by default': function() {
		arr = [1, 2, 3];
		result = copyWithin(arr, 0);
		eqstrict(result, arr);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eqstrict(arr[2], 3);
	},
	'copyWithin should not copy if target >= array.length': function() {
		// no code change needed to pass
		arr = [1, 2, 3];
		result = copyWithin(arr, 5);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eqstrict(arr[2], 3);
	},
	'copyWithin should trim slice to fit array.length - target if necessary': function() {
		// no code change needed to pass
		arr = [1, 2, 3];
		result = copyWithin(arr, 1);
		eqstrict(result, arr);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 1);
		eqstrict(arr[2], 2);
	},
	'If target is positive, copyWithin should start copying at that index': function() {
		// no code change needed to pass
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, 2);
		eqstrict(result, arr);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eqstrict(arr[2], 1);
		eqstrict(arr[3], 2);
	},
	'If target is negative, copyWithin should start copying at array.length + target': function() {
		arr = [1, 2, 3, 4];
		result = copyWithin(arr, -2);
		eqstrict(result, arr);
		eqstrict(arr[0], 1);
		eqstrict(arr[1], 2);
		eqstrict(arr[2], 1);
		eqstrict(arr[3], 2);
		arr1 = [1, 2, 3, 4];
	},
		'If array.length + target < 0, copyWithin should not copy': function() {
		arr1 = [1, 2, 3, 4];
		result1 = copyWithin(arr1, -8);
		eqstrict(result1, arr1);
		eqstrict(arr1[0], 1);
		eqstrict(arr1[1], 2);
		eqstrict(arr1[2], 3);
		eqstrict(arr1[3], 4);
	},
	'If start is positive, copyWithin should slice from that index': function() {
		fail();
	},
	'If start is negative, copyWithin should slice from array.length + start': function() {
		fail();
	},
	'If end is positive, copyWithin should stop slice at index end - 1': function() {
		fail();
	},
	'If end is negative, copyWithin should stop slice at index array.length + end': function() {
		fail();
	}
});
