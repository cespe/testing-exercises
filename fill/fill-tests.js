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
	'fill should take an array and return it.': function() {
		target = [1];
		result = fill(target);
		eq(result, target);
	},
	'fill should take a value and set array elements to it.': function() {
		target = [1];
		result = fill(target, 'x');
		eq(result, target);
		eq(target[0], 'x');
	},
	'if start is undefined, fill should set start to 0.': function() {
		target = [1, 2];
		result = fill(target, 'x');
		eq(result, target);
		eq(target[0], 'x');
	},
	'if end is undefined, fill should set end to array.length.': function() {
		target = [1, 2];
		result = fill(target, 'x');
		eq(result, target);
		eq(target[1], 'x');
	},
	'If start is provided, fill should use it as starting index.': function() {
		target = [1, 2, 3];
		result = fill(target, 'x', 1);
		eq(result, target);
		eq(target[0], 1);
		eq(target[1], 'x');
		eq(target[2], 'x');
	},
	'If end is provided, fill should use it as final index + 1.': function() {
		target = [1, 2, 3];
		result = fill(target, 'x', 1, 2);
		eq(result, target);
		eq(target[0], 1);
		eq(target[1], 'x');
		eq(target[2], 3);
	},
	'If start is negative, fill should start at index array.length + start.': function() {
		target = [1, 2, 3];
		result = fill(target, 'x', -1);
		eq(result, target);
		eq(target[0], 1);
		eq(target[1], 2);
		eq(target[2], 'x');
	},
	'If end is negative, fill should stop at index array.length - 1 + start.': function() {
		target = [1, 2, 3];
		result = fill(target, 'x', 0, -1);
		eq(result, target);
		eq(target[0], 'x');
		eq(target[1], 'x');
		eq(target[2], 3);
	},
	'If given an object with no length property, fill should return the object unchanged.': function() {
		target = {
			0: 1,
			1: 2
		}
		result = fill(target, 'x');
		eq(result, target);
		eq(target[0], 1);
		eq(target[1], 2);
		eq('length' in target, false);
		target = {
			0: 1,
			1: 2
		}
		result = fill(target, 'z', 0, 2);
		eq(result, target);
		eq(target[0], 1);
		eq(target[1], 2);
		eq('length' in target, false);
	},
	'If given an object with length property that is convertible to a number, fill should use it.': function() {
		// passes with no code change	
		target = {
			0: 1,
			1: 2,
			length: "2"
		}
		result = fill(target, 's');
		eq(result, target);
		eq(target[0], 's');
		eq(target[1], 's');
		target = {
			0: 1,
			1: 2,
			length: 2.84
		}
		result = fill(target, 's');
		eq(result, target);
		eq(target[0], 's');
		eq(target[1], 's');


	},
	"If object's length property is not convertible to a number, fill should return the object unchanged": function() {
		// passes with no code change
		target = {
			0: 1,
			1: 2,
			length: "abc"
		}
		result = fill(target, 's');
		eq(result, target);
		eq(target[0], 1);
		eq(target[1], 2);
	}
});
