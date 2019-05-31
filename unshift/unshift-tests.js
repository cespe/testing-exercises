/* function unshift() based on array.prototype.unshift()

unshift(array) adds one or more elements to the beginning of array.

Returns new length of array.

Same general behavior as push() for objects resembling arrays:
	If no length property, unshift creates it
	If length property is not a number, unshift sets it to 0
	If length property is not an integer, unshift converts it

*/

tests({
	'unshift should take an array and return its length': function() {
		target = [];
		result = unshift(target, 'item');
		eq(result, target.length);
	},
	'If object resembling array has no length property, unshift should add it and set to 0': function() {
		target = {};
		result = unshift(target);
		eq('length' in target, true);
		eq(result, 0);
		eq(target.length, 0);
	},
	'If length is not a number, unshift should set it to 0': function() {
		target = {
			length: 'abc'
		}
		result = unshift(target);
		eq(result, 0);
		eq(target.length, 0);
	},
	'If length is convertible to an integer, unshift should convert it': function() {
		target = {
			length: 2.58
		}
		result = unshift(target);
		eq(result, 2);
		eq(target.length, 2);
		target2 = {
			length: '3'
		}
		result = unshift(target2);
		eq(result, 3);
		eq(target2.length, 3)
	},
	'unshift should take zero or more values and prepend them to array': function() {
		target = [];
		result = unshift(target);					// empty array, zero values
		eqstrict(target[0], undefined);
		eq(result, target.length);
		eq(result, 0);
		target0 = [];
		result0 = unshift(target0, 'a');			// empty array, one value
		eqstrict(target0[0], 'a');
		eq(result0, target0.length);
		eq(result0, 1);
		target1 = ['b'];
		result1 = unshift(target1, 'a');			// one-element array, one value
		eqstrict(target1[0], 'a');
		eqstrict(target1[1], 'b');
		eq(result1, target1.length);
		eq(result1, 2);
		target2 = ['b', 'c', 'd'];
		result2 = unshift(target2, 'a');			// three-element array, one value
		eqstrict(target2[0], 'a');
		eqstrict(target2[1], 'b');
		eqstrict(target2[2], 'c');
		eqstrict(target2[3], 'd');
		eq(result2, target2.length);
		target3 = ['d', 'e', 'f'];
		result3 = unshift(target3, 'a', 'b', 'c');	// three-element array, three values
		eq(result3, target3.length);
		eq(result3, 6);
		eqstrict(target3[0], 'a');
		eqstrict(target3[1], 'b');
		eqstrict(target3[2], 'c');
		eqstrict(target3[3], 'd');
		eqstrict(target3[4], 'e');
		eqstrict(target3[5], 'f');
		target4 = {
			0: 'b',
			1: 'c',
			length: 2
		}
		result4 = unshift(target4, 'a');			// two-element well-formed object, one value
		eqstrict(target4[0], 'a');
		eqstrict(target4[1], 'b');
		eqstrict(target4[2], 'c');
		eq(result4, 3);
		eq(target4.length, 3);

	}
});

