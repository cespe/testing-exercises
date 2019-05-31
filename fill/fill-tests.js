/*
 
The fill() method fills (modifies) all the elements of an array from a start index
(default zero) to an end index (default array length) with a static value.

It returns the modified array.

arr.fill(value[, start[, end]])

If start is negative, start at array.length + start
If end is negative, end at array.length + end

fill works on generic objects too, but only if they have a length convertible to an integer
	If no length property, don't modify and don't add add one
	If length property is convertible e.g. '2', fill as normal but don't change length from '2'
	If length property is not convertible, don't modify and don't fill

*/

tests({
	'fill should take an array and return it': function() {
		fail();
	},
	'fill should take a value and set array elements to it': function() {
		fail();
	},
	'if a start value is not provided, fill should default to 0': function() {
		fail();
	},
	'if an end value is not provided, fill should default to array.length': function() {
		// like splice, end is the number after the final index
		fail();
	},
	'If start is negative, fill should start at index array.length + start': function() {
		fail();
	},
	'If end is negative, fill should stop at index array.length - 1 + start': function() {
		fail();
	},
	'If object does not have a length, return object unchanged': function() {
		fail();
	},
	'If object length is convertible to a number, fill should use it': function() {
		fail();
	},
	'If object length is not convertible, return object unchanged': function() {
		fail();
	}
});
