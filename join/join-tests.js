/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

arr.join([separator])

Concatenates the elements in an array or array-like object into a new string with the elements
separated by commas or a supplied separator. 

If an element is not a string, it is converted into a string representation.
	An undefined or null element is converted to the empty string ''.
	The docs don't say it, but an empty element is also converted to the empty string.
If the array is empty, returns an empty string.
If the array has one element, returns the element in a string with no separator.

If separator is not supplied, defaults to comma.
If supplied separator is the empty string '', elements are joined with no separator between them.
If supplied separator is not a string, it is converted to its string representation.
	'' + separator works fine for these cases, including null.
If supplied separator is 'undefined', it is as if argument was not supplied, i.e. defaults to comma.

Use the addition operator (+) to do the joining, since it converts elements to strings properly
except for null and undefined.
	Test for null and undefined and set them to empty string.
	No need to test for empty element, it is handled correctly by +

array1 = ['str', null];
array1.join()
"str,"
array1 = ['str', undefined];
array1.join()
"str,"
array1 = ['str', null, undefined, {}];
array1.join()
"str,,,[object Object]"

*/

tests({
	'join should take an array and return a string.': function() {
		result = undefined;
		target = [];
		result = join(target);
		eq(typeof(result), 'string');
	},
	'If the given array is empty, join should return an empty string.': function() {
		result = join([]);
		eq(result, '');
	},
	'If the given array has one element, join should return it in a string with no separator.': function() {
		result = join(['a']);
		eq(result, 'a');
	},
	'If an element is not a string, it should be converted to its string representation.': function() {
		result = join([1]);
		eq(result, '1');
		result = join([true]);
		eq(result, 'true');
		result = join([{}]);
		eq(result, '[object Object]');
	},
	'If an element is null, undefined or empty, it should be converted to the empty string.': function() {
		result = join([null]);
		eq(result, '');
		result = join([undefined]);
		eq(result, '');
		result = join([,]);
		eq(result, '');
	},
	'If no separator is provided, join should concatenate multiple elements separated by commas.': function() {
		result = join(['A', 1, 'B', 2]);
		eq(result, 'A,1,B,2');
		result = join([null, 'a', undefined,, true]);
		eq(result, ",a,,,true");
	},
	'If a separator is provided, join should use it to separate concatenated elements.': function() {
		result = join([1, 2, 3], ', ');
		eq(result, '1, 2, 3');
	},
	'If a given separator is an empty string, join should concatenate with no spaces between elements.': function() {
		result = join([1, 2, 3], '');
		eq(result, '123');
	},
	'If a given separator is not a string, join should convert it to its string representation.': function() {
		result = join([1, 2, 3], null);
		eq(result, '1null2null3');
		result = join([1, 2, 3], undefined);
		eq(result, '1,2,3');
		result = join([1, 2, 3], 0);
		eq(result, '10203');
		result = join([1, 2, 3], 9.0);
		eq(result, '19293');
		result = join(['a', 'b', 'c'], 8.8);
		eq(result, 'a8.8b8.8c');
		result = join([1, 2, 3], true);
		eq(result, '1true2true3');
	}
});
