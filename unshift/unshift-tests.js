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
		fail();
	},
	'unshift should take zero or more values and prepend them to array': function() {
		fail();
	},
	'If object resembling array has no length property, unshift should add it': function() {
		fail();
	},
	'If length is not a number, unshift should set it to 0': function() {
		fail();
	},
	'If length is convertible to an integer, unshift should convert it': function() {
		fail();
	}
});

