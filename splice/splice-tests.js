/* splice() changes the contents of an array in place. Elements can be removed (not just deleted),
 * elements can be replaced, and new elements can be added.
 *
 * splice() returns a new array with any deleted elements. If no elements are removed, and empty
 * array is returned.
 *
 * Syntax of array method
 * var arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
 *
 * Begin changing the array at index start.
 * 	1. If start > array.length, start = array.length.
 * 	2. If start < 0, start = array.length + start.
 * 	3. Doc says if |start| > array.length, start = 0. That contradicts 1.
 * 		It probably means if array.length + start < 0, start at 0.
 *
 * 	Optional deleteCount is the number of elements to remove beginning at start.
 * 	1. If omitted, delete elements start to array.length.
 * 	2. If deleteCount >= array.length, delete elements start to array.length.
 * 	3. If deleteCount <= 0, do not remove any elements.
 *
 * 	Optional items
 * 	1. Add items beginning at start, moving existing elements to the right.
 *
 * Questions
 * 	Coordinate the actions of deleteCount and adding items?
 * 	The docs are thin. Investigate behavior on e.g. array-like objects?
 */

tests({
	'splice should accept an array as its first argument and return a new array': function() {
		fail();
	},
	"splice's second argument should be start, the index at which to begin splicing": function() {
		fail();
	},
	'Without optional arguments, splice should delete elements from start index to end of array': function() {
		fail();
	},
	'splice should put deleted elements, if any, in the returned array': function() {
		fail();
	},
	'If start > array.length, splice should set start to array.length': function() {
		fail();
	},
	'If start < 0, splice should set start to array.length + start': function() {
		fail();
	},
	'If start < 0 and array.length + start < 0, splice should set start 0': function() {
		fail();
	},
	'splice should accept a third argument, deleteCount, and remove that number of elements': function() {
		fail();
	},
	'If deleteCount >= array.length, splice should remove elements to end of array': function() {
		fail();
	},
	'If deleteCount <= 0, splice should not remove any elements': function() {
		fail();
	},
	'If additional arguments are supplied, splice should add them as elements beginning from start': function() {
		fail();
	}
});
