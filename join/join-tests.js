/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

arr.join([separator])

Concatenates the elements in an array or array-like object into a new string with the elements
separated by commas or a supplied separator. 

If an element is not a string, it is converted into a string representation.
	An undefined or null element is converted to the empty string ''.
If the array is empty, returns an empty string.
If the array has one element, returns the element in a string with no separator.

If separator is not supplied, defaults to comma.
If supplied separator is the empty string '', elements are joined with no separator between them.
If supplied separator is not a string, it is converted to its string representation.

Use the addition operator (+) to do the joining, since it converts elements to strings properly
except for null and undefined.
	Test for null and undefined and set them to emtpy string.

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
	'join should take an array or array-like object and return a string': function() {
		fail();
	},
	'If the given array is empty, join should return an empty string': function() {
		fail();
	},
	'If the given array has one element, join should return it in a string with no separator': function() {
		fail();
	},
	'If an element is not a string, it should be converted to its string representation': function() {
		fail();
	},
	'If an element is null or undefined, it should be converted to the empty string': function() {
		fail();
	},
	'If no separator is provided, join should concatenate elements separated by commas': function() {
		fail();
	},
	'If a separator is provided, join should use it to separate concatenated elements': function() {
		fail();
	},
	'If a given separator is an empty string, join should concatenate with no spaces between elements': function() {
		fail();
	},
	'If a given separator is not a string, join should convert it to its string representation': function() {
		fail();
	}
});
