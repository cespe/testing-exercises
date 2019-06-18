/* function unshift() based on array.prototype.unshift()

unshift(array) adds one or more elements to the beginning of array.

Returns new length of array.

Same general behavior as push() for objects resembling arrays:
	If no length property, unshift creates it
	If length property is not a number, unshift sets it to 0
	If length property is not an integer, unshift converts it

See array.prototype.unshift-spec.js for notes and console tests on objects
resembling arrays.

*/

tests({
	'unshift should take an array and return its length.': function() {
		target = [];
		result = unshift(target, 'item');
		eq(result, target.length);
	},
	'If given an object resembling an array with no length property, unshift should add it and set to 0.': function() {
		target = {};
		result = unshift(target);
		eq('length' in target, true);
		eq(result, 0);
		eq(target.length, 0);
	},
	"If given object's length is not a number, unshift should set it to 0.": function() {
		target = {
			length: 'abc'
		}
		result = unshift(target);
		eq(result, 0);
		eq(target.length, 0);
	},
	"If given object's length is convertible to an integer, unshift should convert it.": function() {
		target = {
			length: 2.58
		}
		result = unshift(target);
		eq(result, 2);
		eq(target.length, 2);
		target = {
			length: '3'
		}
		result = unshift(target);
		eq(result, 3);
		eq(target.length, 3)
	},
	'unshift should take zero or more values and prepend them to array.': function() {
		target = [];
		result = unshift(target);					// empty array, zero values
		eq(target[0], undefined);
		eq(result, target.length);
		eq(result, 0);
		target = [];
		result = unshift(target, 'a');			// empty array, one value
		eq(target[0], 'a');
		eq(result, target.length);
		eq(result, 1);
		target = ['b'];
		result = unshift(target, 'a');			// one-element array, one value
		eq(target[0], 'a');
		eq(target[1], 'b');
		eq(result, target.length);
		eq(result, 2);
		target = ['b', 'c', 'd'];
		result = unshift(target, 'a');			// three-element array, one value
		eq(target[0], 'a');
		eq(target[1], 'b');
		eq(target[2], 'c');
		eq(target[3], 'd');
		eq(result, target.length);
		target = ['d', 'e', 'f'];
		result = unshift(target, 'a', 'b', 'c');	// three-element array, three values
		eq(result, target.length);
		eq(result, 6);
		eq(target[0], 'a');
		eq(target[1], 'b');
		eq(target[2], 'c');
		eq(target[3], 'd');
		eq(target[4], 'e');
		eq(target[5], 'f');
		target = {
			0: 'b',
			1: 'c',
			length: 2
		}
		result = unshift(target, 'a');			// two-element well-formed object, one value
		eq(target[0], 'a');
		eq(target[1], 'b');
		eq(target[2], 'c');
		eq(result, 3);
		eq(target.length, 3);
		target = [,];								// sparse array, one value
		result = unshift(target, 'a');
		eq(target[0], 'a');
		eq(target[1], undefined);
		eq(result, target.length);

	}
});

// Could add a test to document/produce weird behavior noted in array.prototype.unshift-spec.js

