/*
reverse() reverses an array in place: first element becomes the last, last becomes
the first, etc.

Returns the array.

Works on objects resembling arrays like fill(), shift(), etc.
	Works normally on well-formed objects
	Returns unmutated array if length is missing or NaN
	Returns reversed if length can be converted to integer
	Keys off of length, adds/removes indexes as necessary
		0: 1, 1: 2, length: 8}
		[].reverse.call(obj)
		{6: 2, 7: 1, length: 8}
	
		{0: 1, 3: 2, length: 8}
		[].reverse.call(obj)
		{4: 2, 7: 1, length: 8}
*/

tests({
	'reverse should take an array or an object resembling an array and return it.': function() {
		target = [1, 2, 3];
		result = reverse(target);
		eq(result, target);
	},
	'Given an object, reverse should return it unmutated if length property is missing.': function() {
		target = {
			0: 1,
			1: 2
		}
		result = reverse(target);
		eq(result, target);
		eq(target[0], 1);
		eq(target[1], 2);
	},
	'Given an object, reverse should return it unmutated if length evaluates to NaN.': function() {
		target = {
			0: 1,
			1: 2,
			length: 'abc'
		}
		result = reverse(target);
		eq( result, target);
		eq(target[0], 1);
		eq(target[1], 2);
	},
	'reverse should reverse elements in place.': function() {
		target = [];
		result = reverse(target);		// empty array
		eq(result, target);
		target = [1, 2, 3];
		result = reverse(target);		// odd number of elements
		eq(result, target);
		eq(target[0], 3);
		eq(target[1], 2);
		eq(target[2], 1);
		target = [1, 2, 3, 4];
		result = reverse(target);		// even number of elements
		eq(result, target);
		eq(target[0], 4);
		eq(target[1], 3);
		eq(target[2], 2);
		eq(target[3], 1);
		target = [1, 2,,3];
		result = reverse(target);		// sparse array
		eq(result, target);
		eq(target[0], 3);
		eq(target[1], undefined);
		eq(target[2], 2);
		eq(target[3], 1);
		target = {
			0: 1,
			1: 2,
			2: 3,
			length: 3.5
		}
		result = reverse(target);		// well-formed object
		eq(result, target);
		eq(target[0], 3);
		eq(target[1], 2);
		eq(target[2], 1);
	},
	'If index position to be reversed is undefined, reverse should create it.': function() {
		target = {
			0: 1,
			1: 2,
			length: 8
		}
		result = reverse(target);		// length too long
		eq(result, target);
		eq(target[7], 1);
		eq(target[6], 2);
		target = {
			0: 1,
			1: 2,
			6: undefined,
			length: 8
		}
		result = reverse(target);		// missing indexed properties
		eq(result, target);
		eq(target[7], 1);
		eq(target[6], 2);
		eq(target[0], undefined);
	},
	'reverse should delete an index after reversing it to a newly defined index.': function() {
		target = {
			0: 1,
			1: 2,
			length: 8
		}
		result = reverse(target);		// missing indexed properties
		eq(result, target);
		eq(target[7], 1);
		eq(target[6], 2);
		eq(0 in target, false);
		eq(1 in target, false);
		target = {
			0: 1,
			1: 2,
			6: undefined,
			length: 8
		}
		result = reverse(target);		// missing indexed properties
		eq(result, target);
		eq(target[7], 1);
		eq(target[6], 2);
		eq(target[1], undefined);
		eq(0 in target, false);
		target = {
			3: 4,
			7: 8,
			length: 8
		}
		// [].reverse.call(target)
		// {0: 8, 4: 4, length: 8}
		result = reverse(target);		// missing indexed properties
		eq(result, target);
		eq(target[0], 8);
		eq(target[4], 4);
		eq(1 in target, false);
		eq(2 in target, false);
		eq(3 in target, false);
		eq(5 in target, false);
		eq(6 in target, false);
		eq(7 in target, false);
	}
});
