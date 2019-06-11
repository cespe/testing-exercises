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
		var arr = [1, 2, 3];
		result = splice(arr);
		eqstrict(result === arr, false);
		eq(Array.isArray(result), true);
	},
	'splice should take start, a starting index number, as its second argument': function() {
		// added param to the function, but the code change isn't needed to pass the test
		var arr1 = [1, 2, 3];
		result1 = splice(arr1, 0);
		eq(Array.isArray(result1), true);
	},
	'If only array and start are provided, splice should remove elements from start index to end of array': function() {
		var arr2 = [1, 2, 3];
		result2 = splice(arr2, 1);
		eqstrict(arr2.length, 1);
		eqstrict(arr2[0], 1);
		eqstrict(arr2[1] in arr2, false);
		eqstrict(arr2[2] in arr2, false);
	},
	'splice should put deleted elements, if any, in the array to be returned': function() {
		var arr3 = [1, 2, 3];
		result3 = splice(arr3, 1);
		eqstrict(result3.length, 2);
		eqstrict(result3[0], 2);
		eqstrict(result3[1], 3);
	},
	'If start > array.length, splice should set start to array.length': function() {
		var arr4 = [1, 2, 3];
		result4 = splice(arr4, 5);
		eqstrict(arr4.length, 3);
		eqstrict(arr4[0], 1);
		eqstrict(arr4[1], 2);
		eqstrict(arr4[2], 3);
	
	},
	'If start < 0, splice should set start to array.length + start': function() {
		var arr5 = [1, 2, 3];
		result5 = splice(arr5, -2);
		eqstrict(arr5.length, 1);
		eqstrict(arr5[0], 1);
		eqstrict(arr5[1] in arr5, false);
		eqstrict(arr5[2] in arr5, false);
	},
	'If start < 0 and array.length + start < 0, splice should set start 0': function() {
		var arr6 = [1, 2, 3];
		result6 = splice(arr6, -5);
		eqstrict(arr6.length, 0);
		eqstrict(arr6[0] in arr6, false);
		eqstrict(arr6[1] in arr6, false);
		eqstrict(arr6[2] in arr6, false);
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
