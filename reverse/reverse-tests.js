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
	'reverse should take an array or object resembling array and return it': function() {
		target = [1, 2, 3];
		result = reverse(target);
		eqstrict(result, target);
	},
	'reverse should return unmutated object if length is missing': function() {
		target = {
			0: 1,
			1: 2
		}
		result = reverse(target);
		eqstrict(result, target);
		eqstrict(target[0], 1);
		eqstrict(target[1], 2);
	},
	'reverse should return unmutated object if length evaluates to NaN': function() {
		target = {
			0: 1,
			1: 2,
			length: 'abc'
		}
		result = reverse(target);
		eqstrict( result, target);
		eqstrict(target[0], 1);
		eqstrict(target[1], 2);
	},
	'reverse should reverse elements in place': function() {
		target0 = [];
		result0 = reverse(target0);		// empty array
		eqstrict(result0, target0);
		target = [1, 2, 3];
		result = reverse(target);		// odd number of elements
		eqstrict(result, target);
		eqstrict(target[0], 3);
		eqstrict(target[1], 2);
		eqstrict(target[2], 1);
		target2 = [1, 2, 3, 4];
		result2 = reverse(target2);		// even number of elements
		eqstrict(result2, target2);
		eqstrict(target2[0], 4);
		eqstrict(target2[1], 3);
		eqstrict(target2[2], 2);
		eqstrict(target2[3], 1);
		target3 = [1, 2,,3];
		result3 = reverse(target3);		// sparse array
		eqstrict(result3, target3);
		eqstrict(target3[0], 3);
		eqstrict(target3[1], undefined);
		eqstrict(target3[2], 2);
		eqstrict(target3[3], 1);
		target4 = {
			0: 1,
			1: 2,
			2: 3,
			length: 3.5
		}
		result4 = reverse(target4);		// well-formed object
		eqstrict(result4, target4);
		eqstrict(target4[0], 3);
		eqstrict(target4[1], 2);
		eqstrict(target4[2], 1);
	},
	'if index to be reversed is undefined, reverse should create it': function() {
		target = {
			0: 1,
			1: 2,
			length: 8
		}
		result = reverse(target);		// length too long
		eqstrict(result, target);
		eqstrict(target[7], 1);
		eqstrict(target[6], 2);
		target1 = {
			0: 1,
			1: 2,
			6: undefined,
			length: 8
		}
		result1 = reverse(target1);		// missing indexed properties
		eqstrict(result1, target1);
		eqstrict(target1[7], 1);
		eqstrict(target1[6], 2);
		eqstrict(target1[0], undefined);
	},
	'reverse should delete an index after reversing it to a newly defined index': function() {
		target = {
			0: 1,
			1: 2,
			length: 8
		}
		result = reverse(target);		// missing indexed properties
		eqstrict(result, target);
		eqstrict(target[7], 1);
		eqstrict(target[6], 2);
		eq(0 in target, false);
		eq(1 in target, false);
		target1 = {
			0: 1,
			1: 2,
			6: undefined,
			length: 8
		}
		result1 = reverse(target1);		// missing indexed properties
		eqstrict(result1, target1);
		eqstrict(target1[7], 1);
		eqstrict(target1[6], 2);
		eqstrict(target1[1], undefined);
		eq(0 in target1, false);
		target2 = {
			3: 4,
			7: 8,
			length: 8
		}
		// [].reverse.call(target2)
		// {0: 8, 4: 4, length: 8}
		result2 = reverse(target2);		// missing indexed properties
		eqstrict(result2, target2);
		eqstrict(target2[0], 8);
		eqstrict(target2[4], 4);
		eq(1 in target2, false);
		eq(2 in target2, false);
		eq(3 in target2, false);
		eq(5 in target2, false);
		eq(6 in target2, false);
		eq(7 in target2, false);
	}
});
