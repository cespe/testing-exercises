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
		fail();
	},
	'copyWithin should not change array.length': function() {
		fail();
	},
	'copyWithin should take target and copy entire array to it by default': function() {
		fail();
	},
	'copyWithin does not copy if target >= array.length': function() {
		fail();
	},
	'copyWithin should trim slice to fit array.length - target if necessary': function() {
		fail();
	},
	'If target is positive, copyWithin should start copying at that index': function() {
		fail();
	},
	'If target is negative, copyWithin should start copying at array.length + target': function() {
		fail();
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
