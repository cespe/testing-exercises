/*
 var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

 Use concat() to append one or more arrays or values to an array
 Returns a new array
 Does not change the original arrays/values
 For each argument, push its elements (if it is an array) or the value itself
   (if it is not an array) to the new array.
 Does not make "deep copies" of elements, i.e. if an element is an object
   reference, it is pushed as an object reference.
*/

tests({
	'concat should return a new array': function() {
		fail();
		var result = undefined;
		result = concat();
		Array.isArray(result);
	},
	'if given an array, concat should push each element to returned array': function() {
		fail();
	},
	'if given a primitive, concat should push it to returned array': function() {
		fail();
	},
	'if given a non-array object, concat should push it to returned array': function() {
		fail();
	},
	'if given multiple arguments, concat should process each one in turn': function() {
		fail();
	},
	'concat should not recurse into nested array arguments': function() {
		fail();
	}
});
