/*
 
The fill() method fills (modifies) all the elements of an array from a start index
(default zero) to an end index (default array length) with a static value.

Like splice, end is the number after the final index.

fill() returns the modified array.

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
		target = [1];
		result = fill(target);
		eqstrict(result, target);
	},
	'fill should take a value and set array elements to it': function() {
		target = [1];
		result = fill(target, 'x');
		eqstrict(result, target);
		eqstrict(target[0], 'x');
	},
	'if a start value is not provided, start should default to 0': function() {
		target = [1, 2];
		result = fill(target, 'x');
		eqstrict(result, target);
		eqstrict(target[0], 'x');
	},
	'if an end value is not provided, end should default to array.length': function() {
		target = [1, 2];
		result = fill(target, 'x');
		eqstrict(result, target);
		eqstrict(target[1], 'x');
	},
	'If start is provided, fill should use it as starting index': function() {
		target = [1, 2, 3];
		result = fill(target, 'x', 1);
		eqstrict(result, target);
		eqstrict(target[0], 1);
		eqstrict(target[1], 'x');
		eqstrict(target[2], 'x');
	},
	'If end is provided, fill should use it as final index + 1': function() {
		target = [1, 2, 3];
		result = fill(target, 'x', 1, 2);
		eqstrict(result, target);
		eqstrict(target[0], 1);
		eqstrict(target[1], 'x');
		eqstrict(target[2], 3);
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
